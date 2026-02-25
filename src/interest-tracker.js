'use strict';

/**
 * InterestTracker scores topics based on user behaviour signals collected
 * during learning and quiz sessions.
 *
 * Positive signals (increase score):
 *  - "tell me more" clicked after a sentence (+TELL_ME_MORE_WEIGHT)
 *  - Sentence opened / not skipped (+OPENED_WEIGHT)
 *  - Fast AND correct quiz answer (+FAST_CORRECT_WEIGHT)
 *
 * Negative signals (decrease score):
 *  - Sentence skipped (-SKIP_WEIGHT)
 *  - Slow or incorrect quiz answer (-SLOW_OR_WRONG_WEIGHT)
 */

const TELL_ME_MORE_WEIGHT = 3;
const OPENED_WEIGHT = 1;
const SKIP_WEIGHT = 1;
const FAST_CORRECT_WEIGHT = 2;
const SLOW_OR_WRONG_WEIGHT = 1;

/**
 * A quiz answer is considered "fast" when the user answers within this
 * many milliseconds.
 */
const FAST_ANSWER_THRESHOLD_MS = 5000;

class InterestTracker {
  constructor() {
    /** @type {Map<string, number>} topic -> cumulative interest score */
    this._scores = new Map();
  }

  /**
   * Record that the user opened (did not skip) a learning sentence.
   * @param {string} topic
   */
  recordOpened(topic) {
    this._adjust(topic, OPENED_WEIGHT);
  }

  /**
   * Record that the user clicked "tell me more" after a sentence.
   * @param {string} topic
   */
  recordTellMeMore(topic) {
    this._adjust(topic, TELL_ME_MORE_WEIGHT);
  }

  /**
   * Record that the user skipped a learning sentence.
   * @param {string} topic
   */
  recordSkipped(topic) {
    this._adjust(topic, -SKIP_WEIGHT);
  }

  /**
   * Record the result of a quiz answer.
   * @param {string} topic
   * @param {boolean} correct - whether the answer was correct
   * @param {number} responseTimeMs - time taken to answer in milliseconds
   */
  recordQuizAnswer(topic, correct, responseTimeMs) {
    const fast = responseTimeMs <= FAST_ANSWER_THRESHOLD_MS;
    if (correct && fast) {
      this._adjust(topic, FAST_CORRECT_WEIGHT);
    } else {
      this._adjust(topic, -SLOW_OR_WRONG_WEIGHT);
    }
  }

  /**
   * Return an ordered array of { topic, score } objects, highest score first.
   * Only topics with a positive score are returned.
   * @returns {Array<{topic: string, score: number}>}
   */
  getTopInterests() {
    const entries = [];
    for (const [topic, score] of this._scores) {
      if (score > 0) {
        entries.push({ topic, score });
      }
    }
    entries.sort((a, b) => b.score - a.score);
    return entries;
  }

  /**
   * Return the raw score for a single topic (0 if unknown).
   * @param {string} topic
   * @returns {number}
   */
  getScore(topic) {
    return this._scores.get(topic) ?? 0;
  }

  /**
   * Return a plain-object snapshot suitable for serialisation.
   * @returns {Record<string, number>}
   */
  toJSON() {
    return Object.fromEntries(this._scores);
  }

  /**
   * Restore state from a plain object (e.g. after deserialisation).
   * @param {Record<string, number>} data
   */
  fromJSON(data) {
    this._scores = new Map(Object.entries(data));
  }

  // ── private ──────────────────────────────────────────────────────────────

  _adjust(topic, delta) {
    const current = this._scores.get(topic) ?? 0;
    this._scores.set(topic, current + delta);
  }
}

module.exports = { InterestTracker, FAST_ANSWER_THRESHOLD_MS };
