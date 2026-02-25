'use strict';

/**
 * LearningSession manages a list of learning sentences for a given topic set
 * and records the user's interaction signals into an InterestTracker.
 *
 * Each sentence has the shape:
 *   { id: string, topic: string, text: string, detail?: string }
 *
 * `detail` is the extended explanation shown when the user clicks "tell me more".
 */

class LearningSession {
  /**
   * @param {import('./interest-tracker').InterestTracker} interestTracker
   * @param {Array<{id: string, topic: string, text: string, detail?: string}>} sentences
   */
  constructor(interestTracker, sentences) {
    this._tracker = interestTracker;
    this._sentences = sentences;
    this._currentIndex = 0;
    /** @type {Array<{sentenceId: string, action: string, topic: string}>} */
    this._events = [];
  }

  /** Total number of sentences in this session. */
  get total() {
    return this._sentences.length;
  }

  /** Index of the currently active sentence (0-based). */
  get currentIndex() {
    return this._currentIndex;
  }

  /** Whether there are more sentences to present. */
  get hasNext() {
    return this._currentIndex < this._sentences.length;
  }

  /** The current sentence object, or null if the session is complete. */
  get currentSentence() {
    return this._sentences[this._currentIndex] ?? null;
  }

  /**
   * Record that the user read the current sentence (did not skip it) and
   * advance to the next one.
   */
  markOpened() {
    const sentence = this._requireCurrent();
    this._tracker.recordOpened(sentence.topic);
    this._log(sentence, 'opened');
    this._advance();
  }

  /**
   * Record that the user clicked "tell me more" on the current sentence and
   * advance to the next one.
   */
  markTellMeMore() {
    const sentence = this._requireCurrent();
    this._tracker.recordTellMeMore(sentence.topic);
    this._log(sentence, 'tell_me_more');
    this._advance();
  }

  /**
   * Record that the user skipped the current sentence and advance.
   */
  markSkipped() {
    const sentence = this._requireCurrent();
    this._tracker.recordSkipped(sentence.topic);
    this._log(sentence, 'skipped');
    this._advance();
  }

  /**
   * Return a summary of events recorded during this session.
   * @returns {Array<{sentenceId: string, action: string, topic: string}>}
   */
  getEvents() {
    return [...this._events];
  }

  // ── private ──────────────────────────────────────────────────────────────

  _requireCurrent() {
    const sentence = this._sentences[this._currentIndex];
    if (!sentence) throw new Error('Learning session is already complete');
    return sentence;
  }

  _advance() {
    this._currentIndex += 1;
  }

  _log(sentence, action) {
    this._events.push({ sentenceId: sentence.id, action, topic: sentence.topic });
  }
}

module.exports = { LearningSession };
