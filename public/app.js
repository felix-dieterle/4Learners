/* global app.js — runs entirely in the browser, talks to the Express API */
'use strict';

// ── Constants ────────────────────────────────────────────────────────────────

const QUIZ_TIME_LIMIT_MS = 15000; // 15 seconds per question

// ── State ────────────────────────────────────────────────────────────────────

let sessionId = null;
let timerStart = null;
let timerAnimationId = null;

// ── DOM helpers ───────────────────────────────────────────────────────────────

const $ = (id) => document.getElementById(id);

function showScreen(name) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  $(name + '-screen').classList.add('active');
}

function setProgress(barId, current, total) {
  const pct = total > 0 ? (current / total) * 100 : 0;
  $(barId).style.width = pct + '%';
}

function renderInterestPanel(panelId, interests) {
  const panel = $(panelId);
  if (!interests || interests.length === 0) {
    panel.innerHTML = '';
    return;
  }
  const maxScore = Math.max(...interests.map((i) => i.score), 1);
  panel.innerHTML = `
    <h3>Your interests so far</h3>
    ${interests
      .map(
        (i) => `
      <div class="interest-bar-row">
        <span class="interest-bar-label">${escHtml(i.topic)}</span>
        <div class="interest-bar-track">
          <div class="interest-bar-fill" style="width:${(i.score / maxScore) * 100}%"></div>
        </div>
        <span class="interest-bar-score">${i.score}</span>
      </div>`
      )
      .join('')}`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── API helpers ───────────────────────────────────────────────────────────────

async function api(method, path, body) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res = await fetch('/api' + path, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || res.statusText);
  return data;
}

// ── Learning phase ────────────────────────────────────────────────────────────

function renderLearning(state) {
  showScreen('learning');
  $('learning-depth').textContent = state.depthLevel;
  setProgress('learning-progress', state.currentIndex, state.total);

  const s = state.currentSentence;
  if (!s) return;

  $('sentence-text').textContent = s.text;
  $('detail-box').classList.add('hidden');
  $('detail-text').textContent = '';

  // Show "tell me more" only if detail text exists
  $('tell-more-btn').style.display = s.detail ? 'inline-block' : 'none';

  renderInterestPanel('interest-panel', state.topInterests);
}

async function handleSentenceAction(action) {
  // If "tell me more" is clicked and detail hasn't been shown yet, show it first
  if (action === 'tell_me_more') {
    const detailBox = $('detail-box');
    if (detailBox.classList.contains('hidden')) {
      const sentenceText = $('sentence-text').textContent;
      // Try to get detail from the DOM (we stored it on the button dataset)
      const detail = $('tell-more-btn').dataset.detail;
      $('detail-text').textContent = detail || '';
      detailBox.classList.remove('hidden');
      return; // Don't record yet — wait for user to click "Got it" or "Tell me more" again
    }
  }

  disableActionButtons(true);
  try {
    const state = await api('POST', `/sessions/${sessionId}/sentence`, { action });
    applyState(state);
  } catch (err) {
    alert('Error: ' + err.message);
    disableActionButtons(false);
  }
}

function disableActionButtons(disabled) {
  ['skip-btn', 'tell-more-btn', 'got-it-btn'].forEach((id) => {
    $(id).disabled = disabled;
  });
}

// ── Quiz phase ────────────────────────────────────────────────────────────────

function renderQuiz(state) {
  showScreen('quiz');
  $('quiz-depth').textContent = state.depthLevel;
  setProgress('quiz-progress', state.currentIndex, state.total);

  const q = state.currentQuestion;
  if (!q) return;

  $('quiz-topic').textContent = q.topic;
  $('quiz-question').textContent = q.question;
  $('quiz-feedback').classList.add('hidden');
  $('quiz-feedback').className = 'feedback hidden';

  const grid = $('quiz-options');
  grid.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(idx));
    grid.appendChild(btn);
  });

  renderInterestPanel('quiz-interest-panel', state.topInterests);
  startTimer();
}

function startTimer() {
  timerStart = Date.now();
  const bar = $('timer-bar');
  bar.style.transition = 'none';
  bar.style.width = '100%';

  // Force reflow so the transition resets
  bar.getBoundingClientRect();
  bar.style.transition = `width ${QUIZ_TIME_LIMIT_MS}ms linear`;
  bar.style.width = '0%';

  if (timerAnimationId) clearTimeout(timerAnimationId);
  timerAnimationId = setTimeout(() => {
    // Auto-submit with a wrong answer if time runs out
    handleAnswer(-1);
  }, QUIZ_TIME_LIMIT_MS);
}

async function handleAnswer(selectedIndex) {
  if (timerAnimationId) {
    clearTimeout(timerAnimationId);
    timerAnimationId = null;
  }

  // Stop timer bar
  const bar = $('timer-bar');
  bar.style.transition = 'none';
  bar.style.width = bar.style.width; // freeze current value

  const responseTimeMs = timerStart ? Date.now() - timerStart : QUIZ_TIME_LIMIT_MS;

  // Disable all option buttons
  document.querySelectorAll('.option-btn').forEach((b) => (b.disabled = true));

  try {
    const state = await api('POST', `/sessions/${sessionId}/answer`, {
      selectedIndex,
      responseTimeMs,
    });

    // Show feedback briefly before advancing
    const fb = $('quiz-feedback');
    const wasCorrect = state.lastAnswer?.correct ?? false;
    fb.textContent = wasCorrect
      ? '✓ Correct!'
      : `✗ Wrong — the next question is coming up`;
    fb.className = 'feedback ' + (wasCorrect ? 'correct-fb' : 'wrong-fb');
    fb.classList.remove('hidden');

    // Highlight chosen and correct options
    const options = document.querySelectorAll('.option-btn');
    if (selectedIndex >= 0 && selectedIndex < options.length) {
      options[selectedIndex].classList.add(wasCorrect ? 'correct' : 'wrong');
    }

    setTimeout(() => applyState(state), 1200);
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

// ── State dispatcher ──────────────────────────────────────────────────────────

function applyState(state) {
  switch (state.phase) {
    case 'learning':
      // Re-fetch to get current sentence data (state from answer doesn't include it)
      if (state.currentSentence) {
        // Store detail for inline display
        if (state.currentSentence.detail) {
          $('tell-more-btn').dataset.detail = state.currentSentence.detail;
        }
        renderLearning(state);
        disableActionButtons(false);
      } else {
        // Need to refresh
        refreshSession();
      }
      break;

    case 'quiz':
      if (state.currentQuestion) {
        renderQuiz(state);
      } else {
        refreshSession();
      }
      break;

    case 'complete':
      renderComplete(state);
      break;
  }
}

async function refreshSession() {
  try {
    showScreen('loading');
    $('loading-message').textContent = 'Loading next content…';
    const state = await api('GET', `/sessions/${sessionId}`);
    applyState(state);
  } catch (err) {
    alert('Error refreshing session: ' + err.message);
    showScreen('start');
  }
}

// ── Complete screen ───────────────────────────────────────────────────────────

function renderComplete(state) {
  showScreen('complete');
  const panel = $('final-interests');
  const interests = state.topInterests ?? [];
  if (interests.length === 0) {
    panel.innerHTML = '<p style="color:var(--muted)">No interest data recorded.</p>';
  } else {
    const maxScore = Math.max(...interests.map((i) => i.score), 1);
    panel.innerHTML = `
      <h3>Your top interests from this session</h3>
      ${interests
        .map(
          (i) => `
        <div class="interest-bar-row">
          <span class="interest-bar-label">${escHtml(i.topic)}</span>
          <div class="interest-bar-track">
            <div class="interest-bar-fill" style="width:${(i.score / maxScore) * 100}%"></div>
          </div>
          <span class="interest-bar-score">${i.score}</span>
        </div>`
        )
        .join('')}`;
  }
}

// ── Start flow ────────────────────────────────────────────────────────────────

async function startSession() {
  const raw = $('topic-input').value.trim();
  if (!raw) {
    showError('Please enter at least one topic.');
    return;
  }
  const topics = raw.split(',').map((t) => t.trim()).filter(Boolean);
  if (topics.length === 0) {
    showError('Please enter at least one topic.');
    return;
  }

  $('start-error').classList.add('hidden');
  showScreen('loading');
  $('loading-message').textContent = 'Generating your personalised content…';

  try {
    const state = await api('POST', '/sessions', { topics });
    sessionId = state.sessionId;

    // Store detail for the first sentence
    if (state.currentSentence?.detail) {
      $('tell-more-btn').dataset.detail = state.currentSentence.detail;
    }

    applyState(state);
  } catch (err) {
    showScreen('start');
    showError('Failed to start session: ' + err.message);
  }
}

function showError(msg) {
  const el = $('start-error');
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ── Event listeners ───────────────────────────────────────────────────────────

$('start-btn').addEventListener('click', startSession);
$('topic-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startSession();
});

$('skip-btn').addEventListener('click', () => handleSentenceAction('skipped'));
$('tell-more-btn').addEventListener('click', () => handleSentenceAction('tell_me_more'));
$('got-it-btn').addEventListener('click', () => handleSentenceAction('opened'));

$('restart-btn').addEventListener('click', () => {
  sessionId = null;
  $('topic-input').value = '';
  showScreen('start');
});
