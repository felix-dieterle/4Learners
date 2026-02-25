/**
 * app.js — 4Learners frontend
 *
 * Runs entirely in the browser / Capacitor Android WebView.
 * Uses engine.js for session logic and calls OpenRouter AI directly —
 * no Node.js server required, making this suitable for an Android APK.
 */
'use strict';

// ── Constants ────────────────────────────────────────────────────────────────

const QUIZ_TIME_LIMIT_MS   = 15000; // 15 s per question
const API_KEY_STORAGE_KEY  = '4learners_openrouter_key';
const MAX_DEPTH            = 3;

// ── Engine (from engine.js) ──────────────────────────────────────────────────

const { AdaptiveSession, AIClient, Phase } = Engine;

// ── State ────────────────────────────────────────────────────────────────────

let adaptiveSession = null;
let pendingQuizQuestions = null; // questions loaded alongside sentences
let timerStart        = null;
let timerAnimationId  = null;

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

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderInterestPanel(panelId, interests) {
  const panel = $(panelId);
  if (!interests || interests.length === 0) { panel.innerHTML = ''; return; }
  const maxScore = Math.max(...interests.map((i) => i.score), 1);
  panel.innerHTML = `
    <h3>Your interests so far</h3>
    ${interests.map((i) => `
      <div class="interest-bar-row">
        <span class="interest-bar-label">${escHtml(i.topic)}</span>
        <div class="interest-bar-track">
          <div class="interest-bar-fill" style="width:${(i.score / maxScore) * 100}%"></div>
        </div>
        <span class="interest-bar-score">${i.score}</span>
      </div>`).join('')}`;
}

// ── API Key / Settings ────────────────────────────────────────────────────────

function getSavedApiKey() {
  return localStorage.getItem(API_KEY_STORAGE_KEY) || '';
}

function saveApiKey(key) {
  localStorage.setItem(API_KEY_STORAGE_KEY, key.trim());
}

function openSettings() {
  $('settings-api-key').value = getSavedApiKey();
  showScreen('settings');
}

function saveSettings() {
  const key = $('settings-api-key').value.trim();
  if (!key) {
    $('settings-error').textContent = 'Please enter your OpenRouter API key.';
    $('settings-error').classList.remove('hidden');
    return;
  }
  saveApiKey(key);
  $('settings-error').classList.add('hidden');
  showScreen('start');
}

// ── Learning phase ────────────────────────────────────────────────────────────

function renderLearning() {
  const ls = adaptiveSession.learningSession;
  showScreen('learning');
  $('learning-depth').textContent = adaptiveSession.depthLevel;
  setProgress('learning-progress', ls.currentIndex, ls.total);

  const s = ls.currentSentence;
  if (!s) return;

  $('sentence-text').textContent = s.text;
  $('detail-box').classList.add('hidden');
  $('detail-text').textContent = s.detail || '';
  $('tell-more-btn').style.display = s.detail ? 'inline-block' : 'none';

  renderInterestPanel('interest-panel', adaptiveSession.interestTracker.getTopInterests());
  disableActionButtons(false);
}

async function handleSentenceAction(action) {
  const ls = adaptiveSession.learningSession;

  // "Tell me more" first shows the detail; second click records + advances
  if (action === 'tell_me_more') {
    const detailBox = $('detail-box');
    if (detailBox.classList.contains('hidden')) {
      detailBox.classList.remove('hidden');
      return;
    }
  }

  disableActionButtons(true);

  switch (action) {
    case 'opened':     ls.markOpened();    break;
    case 'tell_me_more': ls.markTellMeMore(); break;
    case 'skipped':    ls.markSkipped();   break;
  }

  if (!ls.hasNext) {
    // Learning phase done — transition to quiz
    if (pendingQuizQuestions && pendingQuizQuestions.length > 0) {
      adaptiveSession.beginQuiz(pendingQuizQuestions);
      pendingQuizQuestions = null;
      renderQuiz();
    } else {
      // No questions available; jump straight to next level
      await advanceOrComplete();
    }
  } else {
    renderLearning();
  }
}

function disableActionButtons(disabled) {
  ['skip-btn', 'tell-more-btn', 'got-it-btn'].forEach((id) => { $(id).disabled = disabled; });
}

// ── Quiz phase ────────────────────────────────────────────────────────────────

function renderQuiz() {
  const qs = adaptiveSession.quizSession;
  showScreen('quiz');
  $('quiz-depth').textContent = adaptiveSession.depthLevel;
  setProgress('quiz-progress', qs.currentIndex, qs.total);

  const q = qs.currentQuestion;
  if (!q) return;

  $('quiz-topic').textContent    = q.topic;
  $('quiz-question').textContent = q.question;
  $('quiz-feedback').className   = 'feedback hidden';

  const grid = $('quiz-options');
  grid.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className  = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(idx));
    grid.appendChild(btn);
  });

  renderInterestPanel('quiz-interest-panel', adaptiveSession.interestTracker.getTopInterests());
  startTimer();
}

function startTimer() {
  timerStart = Date.now();
  const bar = $('timer-bar');
  bar.style.transition = 'none';
  bar.style.width = '100%';
  bar.getBoundingClientRect(); // force reflow
  bar.style.transition = `width ${QUIZ_TIME_LIMIT_MS}ms linear`;
  bar.style.width = '0%';

  if (timerAnimationId) clearTimeout(timerAnimationId);
  timerAnimationId = setTimeout(() => handleAnswer(-1), QUIZ_TIME_LIMIT_MS);
}

async function handleAnswer(selectedIndex) {
  if (timerAnimationId) { clearTimeout(timerAnimationId); timerAnimationId = null; }

  const bar = $('timer-bar');
  bar.style.transition = 'none';

  const responseTimeMs = timerStart ? Date.now() - timerStart : QUIZ_TIME_LIMIT_MS;
  document.querySelectorAll('.option-btn').forEach((b) => (b.disabled = true));

  const qs = adaptiveSession.quizSession;
  qs.startTimer();
  const { correct } = qs.submitAnswer(selectedIndex, Date.now() + responseTimeMs);

  const fb = $('quiz-feedback');
  fb.textContent = correct ? '✓ Correct!' : '✗ Wrong — next question coming up';
  fb.className   = 'feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.classList.remove('hidden');

  const options = document.querySelectorAll('.option-btn');
  if (selectedIndex >= 0 && selectedIndex < options.length) {
    options[selectedIndex].classList.add(correct ? 'correct' : 'wrong');
  }

  if (!qs.hasNext) {
    setTimeout(() => advanceOrComplete(), 1200);
  } else {
    setTimeout(() => renderQuiz(), 1200);
  }
}

// ── Level advancement ─────────────────────────────────────────────────────────

async function advanceOrComplete() {
  showScreen('loading');
  $('loading-message').textContent = 'Preparing next level based on your interests…';
  try {
    const topTopics = await adaptiveSession.advanceToNextLevel();
    if (adaptiveSession.phase === Phase.COMPLETE) {
      renderComplete();
    } else {
      // advanceToNextLevel already started a new learning phase; also pre-load quiz
      await preloadQuizQuestions(topTopics);
      renderLearning();
    }
  } catch (err) {
    alert('Error advancing: ' + err.message);
    showScreen('start');
  }
}

async function preloadQuizQuestions(topics) {
  try {
    const aiClient = new AIClient(getSavedApiKey());
    const content  = await aiClient.generateContent(topics, adaptiveSession.depthLevel);
    pendingQuizQuestions = content.questions ?? [];
  } catch {
    pendingQuizQuestions = [];
  }
}

// ── Complete screen ───────────────────────────────────────────────────────────

function renderComplete() {
  showScreen('complete');
  const interests = adaptiveSession.interestTracker.getTopInterests();
  const panel = $('final-interests');
  if (interests.length === 0) {
    panel.innerHTML = '<p style="color:var(--muted)">No interest data recorded.</p>';
    return;
  }
  const maxScore = Math.max(...interests.map((i) => i.score), 1);
  panel.innerHTML = `
    <h3>Your top interests from this session</h3>
    ${interests.map((i) => `
      <div class="interest-bar-row">
        <span class="interest-bar-label">${escHtml(i.topic)}</span>
        <div class="interest-bar-track">
          <div class="interest-bar-fill" style="width:${(i.score / maxScore) * 100}%"></div>
        </div>
        <span class="interest-bar-score">${i.score}</span>
      </div>`).join('')}`;
}

// ── Start flow ────────────────────────────────────────────────────────────────

async function startSession() {
  const apiKey = getSavedApiKey();
  if (!apiKey) {
    showError('An OpenRouter API key is required. Tap ⚙ Settings to add one.');
    return;
  }

  const raw = $('topic-input').value.trim();
  if (!raw) { showError('Please enter at least one topic.'); return; }
  const topics = raw.split(',').map((t) => t.trim()).filter(Boolean);
  if (topics.length === 0) { showError('Please enter at least one topic.'); return; }

  $('start-error').classList.add('hidden');
  showScreen('loading');
  $('loading-message').textContent = 'Generating your personalised content…';

  const aiClient = new AIClient(apiKey);
  adaptiveSession    = new AdaptiveSession(aiClient, { maxDepth: MAX_DEPTH });
  pendingQuizQuestions = null;

  try {
    const content = await adaptiveSession.start(topics);
    pendingQuizQuestions = content.questions ?? [];
    renderLearning();
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
$('topic-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') startSession(); });

$('settings-btn').addEventListener('click', openSettings);
$('settings-save-btn').addEventListener('click', saveSettings);
$('settings-back-btn').addEventListener('click', () => showScreen('start'));

$('skip-btn').addEventListener('click',      () => handleSentenceAction('skipped'));
$('tell-more-btn').addEventListener('click', () => handleSentenceAction('tell_me_more'));
$('got-it-btn').addEventListener('click',    () => handleSentenceAction('opened'));

$('restart-btn').addEventListener('click', () => {
  adaptiveSession = null;
  $('topic-input').value = '';
  showScreen('start');
});

// Show settings prompt if no API key stored
if (!getSavedApiKey()) {
  // Leave start screen active, user will notice the settings button
}
