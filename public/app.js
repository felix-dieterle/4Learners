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
const APP_VERSION          = '1.0.0';
const GITHUB_RELEASES_API  = 'https://api.github.com/repos/felix-dieterle/4Learners/releases/latest';
const UPDATE_CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours
const UPDATE_CHECK_STORAGE_KEY = '4learners_update_check';
const FIRST_RUN_STORAGE_KEY    = '4learners_first_run';
const VERSION_TOAST_MS         = 2500; // must match .version-toast animation-duration in style.css

// ── Engine (from engine.js) ──────────────────────────────────────────────────

const { AdaptiveSession, AIClient, BuiltinContentProvider, Phase } = Engine;

// ── State ────────────────────────────────────────────────────────────────────

let adaptiveSession = null;
let pendingQuizQuestions = null; // questions loaded alongside sentences
let timerStart        = null;
let timerAnimationId  = null;
let currentCategoryName = null; // display name of the active topic category

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

function setLevelIcon(iconId, depth) {
  const level = Math.min(Math.max(depth, 1), 3);
  $(iconId).src = `icons/level-${level}.svg`;
}

function getCategoryName(topic) {
  const categories = typeof BUILTIN_CATEGORIES !== 'undefined' ? BUILTIN_CATEGORIES : [];
  const cat = categories.find((c) => c.topics.some((t) => t.toLowerCase() === (topic || '').toLowerCase()));
  return cat ? cat.name : topic;
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
  $('learning-category').textContent = currentCategoryName || '';
  setLevelIcon('learning-level-icon', adaptiveSession.depthLevel);
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
  $('quiz-category').textContent = currentCategoryName || '';
  setLevelIcon('quiz-level-icon', adaptiveSession.depthLevel);
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
      const apiKey = getSavedApiKey();
      if (apiKey) {
        await showDisclaimer();
      }
      renderLearning();
    }
  } catch (err) {
    alert('Error advancing: ' + err.message);
    showScreen('start');
  }
}

async function preloadQuizQuestions(topics) {
  const apiKey = getSavedApiKey();
  try {
    const provider = apiKey
      ? new AIClient(apiKey)
      : new BuiltinContentProvider(typeof BUILTIN_CATEGORIES !== 'undefined' ? BUILTIN_CATEGORIES : []);
    const content  = await provider.generateContent(topics, adaptiveSession.depthLevel);
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

// ── AI Disclaimer ─────────────────────────────────────────────────────────────

function showDisclaimer() {
  return new Promise((resolve) => {
    const overlay = $('disclaimer-overlay');
    overlay.classList.remove('hidden');
    const btn = $('disclaimer-ok-btn');
    const handler = () => {
      overlay.classList.add('hidden');
      btn.removeEventListener('click', handler);
      resolve();
    };
    btn.addEventListener('click', handler);
  });
}

// ── Essay generation ──────────────────────────────────────────────────────────

function openEssayModal() {
  const interests = adaptiveSession ? adaptiveSession.interestTracker.getTopInterests() : [];
  const select = $('essay-topic-select');
  select.innerHTML = '';
  if (interests.length > 0) {
    interests.forEach((i) => {
      const opt = document.createElement('option');
      opt.value = i.topic;
      opt.textContent = i.topic;
      select.appendChild(opt);
    });
  }
  const depth = adaptiveSession ? adaptiveSession.depthLevel : 1;
  $('essay-level-select').value = String(Math.min(Math.max(depth, 1), MAX_DEPTH));
  $('essay-content').classList.add('hidden');
  $('essay-content').textContent = '';
  $('essay-error').classList.add('hidden');
  $('essay-spinner').classList.add('hidden');
  $('essay-overlay').classList.remove('hidden');
}

async function handleGenerateEssay() {
  const topic = $('essay-topic-select').value;
  const level = parseInt($('essay-level-select').value, 10);
  if (!topic) {
    $('essay-error').textContent = 'Please select a topic.';
    $('essay-error').classList.remove('hidden');
    return;
  }
  $('essay-error').classList.add('hidden');
  $('essay-content').classList.add('hidden');
  $('essay-spinner').classList.remove('hidden');
  $('essay-generate-btn').disabled = true;

  try {
    const aiClient = new AIClient(getSavedApiKey());
    const essayText = await aiClient.generateEssay(topic, level);
    $('essay-content').textContent = essayText;
    $('essay-content').classList.remove('hidden');
  } catch (err) {
    $('essay-error').textContent = 'Failed to generate essay: ' + err.message;
    $('essay-error').classList.remove('hidden');
  } finally {
    $('essay-spinner').classList.add('hidden');
    $('essay-generate-btn').disabled = false;
  }
}

// ── Start flow ────────────────────────────────────────────────────────────────

async function startSession() {
  const apiKey = getSavedApiKey();

  const raw = $('topic-input').value.trim();
  if (!raw) { showError('Please enter at least one topic.'); return; }
  const topics = raw.split(',').map((t) => t.trim()).filter(Boolean);
  if (topics.length === 0) { showError('Please enter at least one topic.'); return; }

  $('start-error').classList.add('hidden');
  showScreen('loading');
  $('loading-message').textContent = 'Loading your personalised content…';

  // Use the AI client when an API key is available, otherwise fall back to
  // built-in pre-bundled content for the selected topic category.
  const contentProvider = apiKey
    ? new AIClient(apiKey)
    : new BuiltinContentProvider(typeof BUILTIN_CATEGORIES !== 'undefined' ? BUILTIN_CATEGORIES : []);

  adaptiveSession    = new AdaptiveSession(contentProvider, { maxDepth: MAX_DEPTH });
  pendingQuizQuestions = null;
  currentCategoryName = getCategoryName(topics[0]);

  try {
    const content = await adaptiveSession.start(topics);
    pendingQuizQuestions = content.questions ?? [];
    if (apiKey) {
      await showDisclaimer();
    }
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

// ── Update check ──────────────────────────────────────────────────────────────

function parseVersion(v) {
  // Strip pre-release suffix (e.g. "1.0.0-beta" → "1.0.0") before parsing
  return (v || '').replace(/^v/, '').split('-')[0].split('.').map(Number);
}

function isNewerVersion(latest, current) {
  const l = parseVersion(latest);
  const c = parseVersion(current);
  for (let i = 0; i < Math.max(l.length, c.length); i++) {
    const lv = l[i] || 0;
    const cv = c[i] || 0;
    if (lv > cv) return true;
    if (lv < cv) return false;
  }
  return false;
}

async function checkForUpdates() {
  const lastCheck = parseInt(localStorage.getItem(UPDATE_CHECK_STORAGE_KEY) || '0', 10);
  if (Date.now() - lastCheck < UPDATE_CHECK_INTERVAL_MS) return;
  try {
    const res = await fetch(GITHUB_RELEASES_API);
    if (!res.ok) return;
    const data = await res.json();
    localStorage.setItem(UPDATE_CHECK_STORAGE_KEY, String(Date.now()));
    const latestTag = data.tag_name || '';
    if (!isNewerVersion(latestTag, APP_VERSION)) return;
    const downloadUrl = data.html_url || 'https://github.com/felix-dieterle/4Learners/releases/latest';
    const banner = $('update-banner');
    $('update-banner-text').textContent = `🆕 Version ${latestTag.replace(/^v/, '')} is available!`;
    $('update-banner-link').href = downloadUrl;
    banner.classList.remove('hidden');
  } catch {
    // Network unavailable or API error — silently ignore
  }
}

// ── Version toast ─────────────────────────────────────────────────────────

function showVersionToast() {
  const toast = $('version-toast');
  if (!toast) return;
  toast.textContent = `v${APP_VERSION}`;
  toast.style.animationDuration = `${VERSION_TOAST_MS}ms`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), VERSION_TOAST_MS);
}

// ── First-run auto-start ──────────────────────────────────────────────────

function checkFirstRun() {
  if (localStorage.getItem(FIRST_RUN_STORAGE_KEY)) return;
  localStorage.setItem(FIRST_RUN_STORAGE_KEY, '1');
  // topic-input is already pre-filled with a random built-in category by
  // renderCategoryChips(), so starting the session requires no API key.
  startSession();
}

// ── Category chips ────────────────────────────────────────────────────────────

// Pick a random category index once per page load so re-renders stay consistent.
const _initialCategoryIndex = (() => {
  const categories = typeof BUILTIN_CATEGORIES !== 'undefined' ? BUILTIN_CATEGORIES : [];
  return categories.length > 0 ? Math.floor(Math.random() * categories.length) : 0;
})();

function renderCategoryChips() {
  const categories = typeof BUILTIN_CATEGORIES !== 'undefined' ? BUILTIN_CATEGORIES : [];
  const container = $('category-chips');
  if (!container || categories.length === 0) return;

  container.innerHTML = '';
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'category-chip' + (idx === _initialCategoryIndex ? ' selected' : '');
    btn.textContent = cat.name;
    btn.dataset.topic = cat.topics[0];
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-chip').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      $('topic-input').value = cat.topics[0];
    });
    container.appendChild(btn);
  });

  // Pre-fill topic input with the randomly selected category
  $('topic-input').value = categories[_initialCategoryIndex].topics[0];
}

// ── Event listeners ───────────────────────────────────────────────────────────

$('start-btn').addEventListener('click', startSession);
$('topic-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') startSession(); });
// Deselect chip when the user manually types a custom topic
$('topic-input').addEventListener('input', () => {
  const chips = document.querySelectorAll('.category-chip');
  const val = $('topic-input').value.trim();
  chips.forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.topic === val);
  });
});

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

$('essay-btn').addEventListener('click', openEssayModal);
$('essay-generate-btn').addEventListener('click', handleGenerateEssay);
$('essay-close-btn').addEventListener('click', () => $('essay-overlay').classList.add('hidden'));
$('update-banner-dismiss').addEventListener('click', () => $('update-banner').classList.add('hidden'));

// Show settings prompt if no API key stored
renderCategoryChips();
showVersionToast();
checkFirstRun();
checkForUpdates();
