'use strict';

/**
 * QuizSession manages a series of quiz questions and records user performance
 * into an InterestTracker.
 *
 * Each question has the shape:
 *   {
 *     id: string,
 *     topic: string,
 *     question: string,
 *     options: string[],      // multiple-choice options
 *     correctIndex: number    // index into options array
 *   }
 *
 * A fast AND correct answer signals high interest in the topic and increases
 * the interest score accordingly.
 */

class QuizSession {
  /**
   * @param {import('./interest-tracker').InterestTracker} interestTracker
   * @param {Array<{id:string,topic:string,question:string,options:string[],correctIndex:number}>} questions
   */
  constructor(interestTracker, questions) {
    this._tracker = interestTracker;
    this._questions = questions;
    this._currentIndex = 0;
    this._startTime = null; // wall-clock ms when the current question was presented
    /** @type {Array<{questionId:string,topic:string,correct:boolean,responseTimeMs:number}>} */
    this._results = [];
  }

  /** Total number of questions in this session. */
  get total() {
    return this._questions.length;
  }

  /** Index of the currently active question (0-based). */
  get currentIndex() {
    return this._currentIndex;
  }

  /** Whether there are more questions remaining. */
  get hasNext() {
    return this._currentIndex < this._questions.length;
  }

  /** The current question object, or null if the session is complete. */
  get currentQuestion() {
    return this._questions[this._currentIndex] ?? null;
  }

  /**
   * Call this when the current question is shown to the user.
   * Records the start timestamp used to calculate response time.
   */
  startTimer() {
    this._startTime = Date.now();
  }

  /**
   * Submit the user's answer for the current question.
   *
   * @param {number} selectedIndex - the index of the chosen option
   * @param {number} [nowMs] - override for current timestamp (useful in tests)
   * @returns {{ correct: boolean, responseTimeMs: number }}
   */
  submitAnswer(selectedIndex, nowMs) {
    const question = this._requireCurrent();
    const elapsed = (nowMs ?? Date.now()) - (this._startTime ?? Date.now());
    const responseTimeMs = Math.max(0, elapsed);
    const correct = selectedIndex === question.correctIndex;

    this._tracker.recordQuizAnswer(question.topic, correct, responseTimeMs);
    this._results.push({
      questionId: question.id,
      topic: question.topic,
      correct,
      responseTimeMs,
    });

    this._currentIndex += 1;
    this._startTime = null;
    return { correct, responseTimeMs };
  }

  /**
   * Return a summary of all answered questions.
   * @returns {Array<{questionId:string,topic:string,correct:boolean,responseTimeMs:number}>}
   */
  getResults() {
    return [...this._results];
  }

  /**
   * Compute a simple score: number of correct answers / total answered.
   * @returns {number} value in [0, 1]
   */
  getScore() {
    if (this._results.length === 0) return 0;
    const correct = this._results.filter((r) => r.correct).length;
    return correct / this._results.length;
  }

  // ── private ──────────────────────────────────────────────────────────────

  _requireCurrent() {
    const q = this._questions[this._currentIndex];
    if (!q) throw new Error('Quiz session is already complete');
    return q;
  }
}

module.exports = { QuizSession };
