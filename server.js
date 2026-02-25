'use strict';

const express = require('express');
const path = require('path');
const { AIClient } = require('./src/ai-client');
const { AdaptiveSession, Phase } = require('./src/adaptive-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── In-memory session store (keyed by sessionId) ─────────────────────────────
// In production this would be backed by a database or Redis.
const sessions = new Map();

const aiClient = new AIClient();

// ── Helper ────────────────────────────────────────────────────────────────────

function requireSession(req, res) {
  const { sessionId } = req.params;
  const session = sessions.get(sessionId);
  if (!session) {
    res.status(404).json({ error: 'Session not found' });
    return null;
  }
  return session;
}

// ── Routes ────────────────────────────────────────────────────────────────────

/**
 * POST /api/sessions
 * Create a new adaptive session.
 * Body: { topics: string[] }
 */
app.post('/api/sessions', async (req, res) => {
  const topics = req.body?.topics;
  if (!Array.isArray(topics) || topics.length === 0) {
    return res.status(400).json({ error: 'topics must be a non-empty array' });
  }

  const sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const session = new AdaptiveSession(aiClient, { maxDepth: 3, topInterestCount: 3 });

  try {
    await session.start(topics);
  } catch (err) {
    return res.status(502).json({ error: `Failed to load content: ${err.message}` });
  }

  sessions.set(sessionId, session);

  res.status(201).json({
    sessionId,
    phase: session.phase,
    depthLevel: session.depthLevel,
    currentSentence: session.learningSession?.currentSentence ?? null,
    total: session.learningSession?.total ?? 0,
    currentIndex: session.learningSession?.currentIndex ?? 0,
  });
});

/**
 * GET /api/sessions/:sessionId
 * Get current session state.
 */
app.get('/api/sessions/:sessionId', (req, res) => {
  const session = requireSession(req, res);
  if (!session) return;

  res.json(buildSessionState(session));
});

/**
 * POST /api/sessions/:sessionId/sentence
 * Record the user's interaction with the current learning sentence.
 * Body: { action: 'opened' | 'tell_me_more' | 'skipped' }
 */
app.post('/api/sessions/:sessionId/sentence', async (req, res) => {
  const session = requireSession(req, res);
  if (!session) return;

  if (session.phase !== Phase.LEARNING) {
    return res.status(409).json({ error: 'Session is not in learning phase' });
  }

  const { action } = req.body ?? {};
  const ls = session.learningSession;

  switch (action) {
    case 'opened':
      ls.markOpened();
      break;
    case 'tell_me_more':
      ls.markTellMeMore();
      break;
    case 'skipped':
      ls.markSkipped();
      break;
    default:
      return res.status(400).json({ error: 'action must be opened, tell_me_more, or skipped' });
  }

  // If learning is done, automatically load quiz questions and transition.
  if (!ls.hasNext) {
    let questions;
    try {
      const content = await aiClient.generateContent(
        session.interestTracker.getTopInterests().slice(0, 3).map((e) => e.topic),
        session.depthLevel
      );
      questions = content.questions;
    } catch {
      // Fallback: no questions available
      questions = [];
    }
    session.beginQuiz(questions);
  }

  res.json(buildSessionState(session));
});

/**
 * POST /api/sessions/:sessionId/answer
 * Submit a quiz answer.
 * Body: { selectedIndex: number, responseTimeMs: number }
 */
app.post('/api/sessions/:sessionId/answer', async (req, res) => {
  const session = requireSession(req, res);
  if (!session) return;

  if (session.phase !== Phase.QUIZ) {
    return res.status(409).json({ error: 'Session is not in quiz phase' });
  }

  const { selectedIndex, responseTimeMs } = req.body ?? {};
  if (typeof selectedIndex !== 'number') {
    return res.status(400).json({ error: 'selectedIndex must be a number' });
  }

  const now = Date.now();
  const qs = session.quizSession;
  qs.startTimer(); // set a synthetic start so submitAnswer has a reference
  const result = qs.submitAnswer(
    selectedIndex,
    now + Math.max(0, responseTimeMs ?? 0)
  );

  // If quiz is done, advance to next level.
  let nextTopics = [];
  if (!qs.hasNext) {
    try {
      nextTopics = await session.advanceToNextLevel();
    } catch (err) {
      return res.status(502).json({ error: `Failed to advance: ${err.message}` });
    }
  }

  res.json({
    ...buildSessionState(session),
    lastAnswer: result,
    nextTopics,
  });
});

/**
 * GET /api/sessions/:sessionId/interests
 * Return the current interest scores.
 */
app.get('/api/sessions/:sessionId/interests', (req, res) => {
  const session = requireSession(req, res);
  if (!session) return;

  res.json({
    interests: session.interestTracker.getTopInterests(),
    scores: session.interestTracker.toJSON(),
  });
});

// ── State builder ─────────────────────────────────────────────────────────────

function buildSessionState(session) {
  const state = {
    phase: session.phase,
    depthLevel: session.depthLevel,
    topInterests: session.interestTracker.getTopInterests(),
  };

  if (session.phase === Phase.LEARNING && session.learningSession) {
    const ls = session.learningSession;
    state.currentSentence = ls.currentSentence;
    state.total = ls.total;
    state.currentIndex = ls.currentIndex;
  }

  if (session.phase === Phase.QUIZ && session.quizSession) {
    const qs = session.quizSession;
    const q = qs.currentQuestion;
    // Do not expose correctIndex to the client
    state.currentQuestion = q
      ? { id: q.id, topic: q.topic, question: q.question, options: q.options }
      : null;
    state.total = qs.total;
    state.currentIndex = qs.currentIndex;
    state.score = qs.getScore();
  }

  return state;
}

// ── Start ─────────────────────────────────────────────────────────────────────

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`4Learners server running on http://localhost:${PORT}`);
    if (!process.env.OPENROUTER_API_KEY) {
      console.warn('Warning: OPENROUTER_API_KEY is not set. AI content generation will fail.');
    }
  });
}

module.exports = app; // exported for testing
