/**
 * engine.js — browser-compatible session engine for 4Learners.
 *
 * Bundles InterestTracker, LearningSession, QuizSession, AdaptiveSession and
 * the OpenRouter AI client into a single file usable without a Node.js server.
 * Exposed as window.Engine for use by app.js.
 */
(function (global) {
  'use strict';

  // ── Constants ──────────────────────────────────────────────────────────────

  const TELL_ME_MORE_WEIGHT  = 3;
  const OPENED_WEIGHT        = 1;
  const SKIP_WEIGHT          = 1;
  const FAST_CORRECT_WEIGHT  = 2;
  const SLOW_OR_WRONG_WEIGHT = 1;
  const FAST_ANSWER_THRESHOLD_MS = 5000;

  const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  const DEFAULT_MODEL      = 'openai/gpt-4o-mini';

  // ── InterestTracker ────────────────────────────────────────────────────────

  class InterestTracker {
    constructor() {
      this._scores = new Map();
    }

    recordOpened(topic)      { this._adjust(topic,  OPENED_WEIGHT); }
    recordTellMeMore(topic)  { this._adjust(topic,  TELL_ME_MORE_WEIGHT); }
    recordSkipped(topic)     { this._adjust(topic, -SKIP_WEIGHT); }

    recordQuizAnswer(topic, correct, responseTimeMs) {
      const fast = responseTimeMs <= FAST_ANSWER_THRESHOLD_MS;
      this._adjust(topic, correct && fast ? FAST_CORRECT_WEIGHT : -SLOW_OR_WRONG_WEIGHT);
    }

    getTopInterests() {
      const entries = [];
      for (const [topic, score] of this._scores) {
        if (score > 0) entries.push({ topic, score });
      }
      return entries.sort((a, b) => b.score - a.score);
    }

    getScore(topic) { return this._scores.get(topic) ?? 0; }

    toJSON()        { return Object.fromEntries(this._scores); }

    fromJSON(data)  { this._scores = new Map(Object.entries(data)); }

    _adjust(topic, delta) {
      this._scores.set(topic, (this._scores.get(topic) ?? 0) + delta);
    }
  }

  // ── LearningSession ────────────────────────────────────────────────────────

  class LearningSession {
    constructor(interestTracker, sentences) {
      this._tracker   = interestTracker;
      this._sentences = sentences;
      this._index     = 0;
      this._events    = [];
    }

    get total()           { return this._sentences.length; }
    get currentIndex()    { return this._index; }
    get hasNext()         { return this._index < this._sentences.length; }
    get currentSentence() { return this._sentences[this._index] ?? null; }

    markOpened()    { this._act('opened',       (s) => this._tracker.recordOpened(s.topic)); }
    markTellMeMore(){ this._act('tell_me_more', (s) => this._tracker.recordTellMeMore(s.topic)); }
    markSkipped()   { this._act('skipped',      (s) => this._tracker.recordSkipped(s.topic)); }

    getEvents() { return [...this._events]; }

    _act(action, fn) {
      const s = this._sentences[this._index];
      if (!s) throw new Error('Learning session is already complete');
      fn(s);
      this._events.push({ sentenceId: s.id, action, topic: s.topic });
      this._index++;
    }
  }

  // ── QuizSession ────────────────────────────────────────────────────────────

  class QuizSession {
    constructor(interestTracker, questions) {
      this._tracker   = interestTracker;
      this._questions = questions;
      this._index     = 0;
      this._startTime = null;
      this._results   = [];
    }

    get total()           { return this._questions.length; }
    get currentIndex()    { return this._index; }
    get hasNext()         { return this._index < this._questions.length; }
    get currentQuestion() { return this._questions[this._index] ?? null; }

    startTimer() { this._startTime = Date.now(); }

    submitAnswer(selectedIndex, nowMs) {
      const q = this._questions[this._index];
      if (!q) throw new Error('Quiz session is already complete');

      const elapsed      = (nowMs ?? Date.now()) - (this._startTime ?? Date.now());
      const responseTimeMs = Math.max(0, elapsed);
      const correct      = selectedIndex === q.correctIndex;

      this._tracker.recordQuizAnswer(q.topic, correct, responseTimeMs);
      this._results.push({ questionId: q.id, topic: q.topic, correct, responseTimeMs });
      this._index++;
      this._startTime = null;
      return { correct, responseTimeMs };
    }

    getResults() { return [...this._results]; }

    getScore() {
      if (!this._results.length) return 0;
      return this._results.filter((r) => r.correct).length / this._results.length;
    }
  }

  // ── AIClient ───────────────────────────────────────────────────────────────

  class AIClient {
    constructor(apiKey, model) {
      this._apiKey = apiKey || '';
      this._model  = model  || DEFAULT_MODEL;
    }

    setApiKey(key) { this._apiKey = key; }

    async generateEssay(topic, depthLevel) {
      if (!this._apiKey) throw new Error('OpenRouter API key is not set. Open Settings to add it.');

      const depthLabel = depthLevel <= 1 ? 'introductory'
                       : depthLevel === 2 ? 'intermediate'
                       : depthLevel === 3 ? 'advanced' : 'expert';

      const prompt = `You are an expert educator. Write a short educational essay (150-250 words) about the following topic for a ${depthLabel}-level student.

Topic: ${topic}

The essay should be engaging and informative. Return only the essay text, no title or headings.`;

      const res = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this._apiKey}`,
          'HTTP-Referer': 'https://github.com/felix-dieterle/4Learners',
          'X-Title': '4Learners',
        },
        body: JSON.stringify({
          model: this._model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`OpenRouter API error ${res.status}: ${text}`);
      }

      const data = await res.json();
      return data.choices?.[0]?.message?.content ?? '';
    }

    async generateContent(topics, depthLevel) {
      if (!this._apiKey) throw new Error('OpenRouter API key is not set. Open Settings to add it.');

      const depthLabel = depthLevel <= 1 ? 'introductory'
                       : depthLevel === 2 ? 'intermediate'
                       : depthLevel === 3 ? 'advanced' : 'expert';

      const prompt = `You are an expert educator. Generate a JSON learning pack for a student.

Topics: ${topics.join(', ')}
Depth: ${depthLabel} (level ${depthLevel})

Return ONLY valid JSON with this exact structure (no markdown, no extra text):
{
  "sentences": [
    {
      "id": "s1",
      "topic": "<one of the topics above>",
      "text": "<concise learning sentence>",
      "detail": "<2-3 sentence deeper explanation shown on 'tell me more'>"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "topic": "<one of the topics above>",
      "question": "<quiz question>",
      "options": ["<option A>", "<option B>", "<option C>", "<option D>"],
      "correctIndex": 0
    }
  ]
}

Include 5-8 sentences and 4-6 questions spread across all provided topics.`;

      const res = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this._apiKey}`,
          'HTTP-Referer': 'https://github.com/felix-dieterle/4Learners',
          'X-Title': '4Learners',
        },
        body: JSON.stringify({
          model: this._model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`OpenRouter API error ${res.status}: ${text}`);
      }

      const data    = await res.json();
      const content = data.choices?.[0]?.message?.content ?? '';

      try {
        return JSON.parse(content);
      } catch {
        throw new Error(`Failed to parse AI response as JSON: ${content}`);
      }
    }
  }

  // ── AdaptiveSession ────────────────────────────────────────────────────────

  const Phase = Object.freeze({
    LEARNING : 'learning',
    QUIZ     : 'quiz',
    COMPLETE : 'complete',
  });

  class AdaptiveSession {
    constructor(contentProvider, options = {}) {
      this._provider        = contentProvider;
      this._maxDepth        = options.maxDepth        ?? 3;
      this._topInterestCount= options.topInterestCount?? 3;
      this._tracker         = new InterestTracker();
      this._depthLevel      = 1;
      this._phase           = Phase.LEARNING;
      this._learningSession = null;
      this._quizSession     = null;
    }

    get phase()           { return this._phase; }
    get depthLevel()      { return this._depthLevel; }
    get interestTracker() { return this._tracker; }
    get learningSession() { return this._learningSession; }
    get quizSession()     { return this._quizSession; }

    async start(initialTopics) {
      const content = await this._provider.generateContent(initialTopics, this._depthLevel);
      this._beginLearning(content.sentences);
      return content;
    }

    beginQuiz(questions) {
      if (this._phase !== Phase.LEARNING) throw new Error('beginQuiz called outside of learning phase');
      this._quizSession     = new QuizSession(this._tracker, questions);
      this._learningSession = null;
      this._phase           = Phase.QUIZ;
    }

    async advanceToNextLevel() {
      if (this._phase !== Phase.QUIZ) throw new Error('advanceToNextLevel called outside of quiz phase');

      this._depthLevel++;
      if (this._depthLevel > this._maxDepth) {
        this._phase       = Phase.COMPLETE;
        this._quizSession = null;
        return [];
      }

      const topTopics = this._tracker
        .getTopInterests()
        .slice(0, this._topInterestCount)
        .map((e) => e.topic);

      const content = await this._provider.generateContent(topTopics, this._depthLevel);
      this._quizSession = null;
      this._beginLearning(content.sentences);
      return topTopics;
    }

    _beginLearning(sentences) {
      this._learningSession = new LearningSession(this._tracker, sentences);
      this._phase           = Phase.LEARNING;
    }
  }

  // ── Export ────────────────────────────────────────────────────────────────

  global.Engine = {
    InterestTracker,
    LearningSession,
    QuizSession,
    AdaptiveSession,
    AIClient,
    Phase,
    FAST_ANSWER_THRESHOLD_MS,
  };

}(typeof globalThis !== 'undefined' ? globalThis : window));
