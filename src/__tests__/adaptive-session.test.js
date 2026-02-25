'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { AdaptiveSession, Phase } = require('../adaptive-session');

// Minimal content provider that returns canned data
function makeProvider(overrides = {}) {
  return {
    async generateContent(topics, depthLevel) {
      return overrides.generateContent
        ? overrides.generateContent(topics, depthLevel)
        : {
            sentences: [
              { id: 's1', topic: topics[0] ?? 'test', text: 'Sentence one.', detail: 'Detail.' },
              { id: 's2', topic: topics[0] ?? 'test', text: 'Sentence two.', detail: null },
            ],
            questions: [
              {
                id: 'q1',
                topic: topics[0] ?? 'test',
                question: 'Q?',
                options: ['A', 'B', 'C', 'D'],
                correctIndex: 0,
              },
            ],
          };
    },
  };
}

describe('AdaptiveSession', () => {
  it('starts in learning phase after start()', async () => {
    const session = new AdaptiveSession(makeProvider());
    await session.start(['physics']);
    assert.equal(session.phase, Phase.LEARNING);
    assert.equal(session.depthLevel, 1);
    assert.ok(session.learningSession !== null);
  });

  it('transitions to quiz phase via beginQuiz()', async () => {
    const session = new AdaptiveSession(makeProvider());
    await session.start(['physics']);

    const questions = [
      { id: 'q1', topic: 'physics', question: 'Q?', options: ['A'], correctIndex: 0 },
    ];
    session.beginQuiz(questions);

    assert.equal(session.phase, Phase.QUIZ);
    assert.ok(session.quizSession !== null);
    assert.equal(session.learningSession, null);
  });

  it('throws if beginQuiz called outside learning phase', async () => {
    const session = new AdaptiveSession(makeProvider());
    await session.start(['physics']);
    session.beginQuiz([]);

    assert.throws(() => session.beginQuiz([]), /learning phase/);
  });

  it('advances to next level and returns top interest topics', async () => {
    const session = new AdaptiveSession(makeProvider(), { maxDepth: 2 });
    await session.start(['physics']);

    // Simulate user interest
    session.interestTracker.recordTellMeMore('physics');

    const questions = [
      { id: 'q1', topic: 'physics', question: 'Q?', options: ['A'], correctIndex: 0 },
    ];
    session.beginQuiz(questions);

    const topics = await session.advanceToNextLevel();
    assert.ok(Array.isArray(topics));
    assert.ok(topics.includes('physics'));
    assert.equal(session.depthLevel, 2);
    assert.equal(session.phase, Phase.LEARNING);
  });

  it('transitions to complete after maxDepth is exceeded', async () => {
    const session = new AdaptiveSession(makeProvider(), { maxDepth: 1 });
    await session.start(['physics']);

    session.beginQuiz([]);
    const topics = await session.advanceToNextLevel();
    assert.equal(topics.length, 0);
    assert.equal(session.phase, Phase.COMPLETE);
  });

  it('throws advanceToNextLevel outside quiz phase', async () => {
    const session = new AdaptiveSession(makeProvider());
    await session.start(['physics']);
    await assert.rejects(session.advanceToNextLevel(), /quiz phase/);
  });
});
