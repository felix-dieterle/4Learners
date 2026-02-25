'use strict';

const { InterestTracker } = require('./interest-tracker');
const { LearningSession } = require('./learning-session');
const { QuizSession } = require('./quiz-session');

/**
 * AdaptiveSession orchestrates the interleaved flow of learning and quiz
 * phases.  After each phase it inspects the InterestTracker to determine
 * which topics the user is most interested in and requests deeper content
 * for the next round via an AI content provider.
 *
 * Lifecycle:
 *   1. Start with an introductory learning phase.
 *   2. Follow up with a quiz phase on the same material.
 *   3. After the quiz, use interest signals to request deeper AI-generated
 *      content and repeat from step 1 at a deeper level.
 *
 * The `contentProvider` is an object with a single async method:
 *   generateContent(topics: string[], depthLevel: number)
 *     -> Promise<{ sentences: Sentence[], questions: Question[] }>
 */

const Phase = Object.freeze({
  LEARNING: 'learning',
  QUIZ: 'quiz',
  COMPLETE: 'complete',
});

class AdaptiveSession {
  /**
   * @param {{
   *   generateContent: (topics: string[], depthLevel: number) =>
   *     Promise<{sentences: object[], questions: object[]}>
   * }} contentProvider
   * @param {object} [options]
   * @param {number} [options.maxDepth=3]          - maximum depth levels
   * @param {number} [options.topInterestCount=3]  - how many top topics to pick
   */
  constructor(contentProvider, options = {}) {
    this._contentProvider = contentProvider;
    this._maxDepth = options.maxDepth ?? 3;
    this._topInterestCount = options.topInterestCount ?? 3;

    this._tracker = new InterestTracker();
    this._depthLevel = 1;
    this._phase = Phase.LEARNING;

    /** @type {LearningSession|null} */
    this._learningSession = null;
    /** @type {QuizSession|null} */
    this._quizSession = null;
  }

  /** Current phase: 'learning' | 'quiz' | 'complete' */
  get phase() {
    return this._phase;
  }

  /** Current depth level (starts at 1). */
  get depthLevel() {
    return this._depthLevel;
  }

  /** The underlying InterestTracker (read-only access for UI). */
  get interestTracker() {
    return this._tracker;
  }

  /** Active LearningSession (only non-null during the learning phase). */
  get learningSession() {
    return this._learningSession;
  }

  /** Active QuizSession (only non-null during the quiz phase). */
  get quizSession() {
    return this._quizSession;
  }

  /**
   * Initialise the session by loading the first batch of content.
   * Must be called before using the session.
   *
   * @param {string[]} initialTopics - seed topics for level 1
   */
  async start(initialTopics) {
    const content = await this._contentProvider.generateContent(
      initialTopics,
      this._depthLevel
    );
    this._beginLearning(content.sentences);
  }

  /**
   * Transition from the current learning session to the quiz phase.
   * Call this when LearningSession.hasNext is false.
   *
   * @param {object[]} questions - quiz questions for the current depth
   */
  beginQuiz(questions) {
    if (this._phase !== Phase.LEARNING) {
      throw new Error('beginQuiz called outside of learning phase');
    }
    this._quizSession = new QuizSession(this._tracker, questions);
    this._learningSession = null;
    this._phase = Phase.QUIZ;
  }

  /**
   * After the quiz phase ends, analyse interest signals and load deeper
   * content for the highest-interest topics.  Returns the topics selected.
   *
   * Call this when QuizSession.hasNext is false.
   *
   * @returns {Promise<string[]>} the top-interest topics used for next level
   */
  async advanceToNextLevel() {
    if (this._phase !== Phase.QUIZ) {
      throw new Error('advanceToNextLevel called outside of quiz phase');
    }

    this._depthLevel += 1;
    if (this._depthLevel > this._maxDepth) {
      this._phase = Phase.COMPLETE;
      this._quizSession = null;
      return [];
    }

    const topInterests = this._tracker
      .getTopInterests()
      .slice(0, this._topInterestCount)
      .map((e) => e.topic);

    const content = await this._contentProvider.generateContent(
      topInterests,
      this._depthLevel
    );

    this._quizSession = null;
    this._beginLearning(content.sentences);
    return topInterests;
  }

  // ── private ──────────────────────────────────────────────────────────────

  _beginLearning(sentences) {
    this._learningSession = new LearningSession(this._tracker, sentences);
    this._phase = Phase.LEARNING;
  }
}

module.exports = { AdaptiveSession, Phase };
