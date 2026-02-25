'use strict';

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { InterestTracker, FAST_ANSWER_THRESHOLD_MS } = require('../interest-tracker');
const { QuizSession } = require('../quiz-session');

const QUESTIONS = [
  {
    id: 'q1',
    topic: 'physics',
    question: 'What is the speed of light (approx)?',
    options: ['300,000 km/s', '150,000 km/s', '1,000 km/s', '3,000 km/s'],
    correctIndex: 0,
  },
  {
    id: 'q2',
    topic: 'biology',
    question: 'How many chromosomes do humans have?',
    options: ['23', '46', '48', '24'],
    correctIndex: 1,
  },
];

describe('QuizSession', () => {
  let tracker;
  let session;

  beforeEach(() => {
    tracker = new InterestTracker();
    session = new QuizSession(tracker, [...QUESTIONS]);
  });

  it('starts at index 0 with hasNext true', () => {
    assert.equal(session.currentIndex, 0);
    assert.ok(session.hasNext);
    assert.equal(session.currentQuestion.id, 'q1');
  });

  it('submitAnswer with correct + fast response advances and gives positive score', () => {
    session.startTimer();
    const fastTime = FAST_ANSWER_THRESHOLD_MS - 100;
    const { correct, responseTimeMs } = session.submitAnswer(0, Date.now() + fastTime);

    assert.ok(correct);
    assert.equal(session.currentIndex, 1);
    assert.ok(tracker.getScore('physics') > 0);
    assert.ok(responseTimeMs >= 0);
  });

  it('submitAnswer with wrong answer gives negative score', () => {
    session.startTimer();
    session.submitAnswer(2, Date.now() + 100); // wrong answer (index 2 != 0)
    assert.ok(tracker.getScore('physics') < 0);
  });

  it('submitAnswer with slow correct answer gives negative score', () => {
    session.startTimer();
    const slowTime = FAST_ANSWER_THRESHOLD_MS + 1000;
    session.submitAnswer(0, Date.now() + slowTime);
    assert.ok(tracker.getScore('physics') < 0);
  });

  it('hasNext becomes false after all questions are answered', () => {
    session.startTimer();
    session.submitAnswer(0);
    session.startTimer();
    session.submitAnswer(1);
    assert.ok(!session.hasNext);
    assert.equal(session.currentQuestion, null);
  });

  it('throws when submitting on a completed session', () => {
    session.startTimer();
    session.submitAnswer(0);
    session.startTimer();
    session.submitAnswer(1);
    assert.throws(() => session.submitAnswer(0), /complete/);
  });

  it('getScore returns fraction of correct answers', () => {
    session.startTimer();
    session.submitAnswer(0);  // correct
    session.startTimer();
    session.submitAnswer(0);  // wrong (correct is 1)
    assert.equal(session.getScore(), 0.5);
  });

  it('getResults returns all results', () => {
    session.startTimer();
    session.submitAnswer(0);
    session.startTimer();
    session.submitAnswer(1);
    const results = session.getResults();
    assert.equal(results.length, 2);
    assert.equal(results[0].questionId, 'q1');
    assert.equal(results[1].questionId, 'q2');
  });
});
