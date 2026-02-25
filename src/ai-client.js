'use strict';

/**
 * AIClient wraps the OpenRouter REST API to generate learning sentences and
 * quiz questions for a given set of topics and depth level.
 *
 * Set the OPENROUTER_API_KEY environment variable before starting the server.
 */

const DEFAULT_MODEL = 'openai/gpt-4o-mini';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

class AIClient {
  /**
   * @param {object} [options]
   * @param {string} [options.apiKey]   - OpenRouter API key (defaults to env var)
   * @param {string} [options.model]    - model to use
   */
  constructor(options = {}) {
    this._apiKey = options.apiKey ?? process.env.OPENROUTER_API_KEY ?? '';
    this._model = options.model ?? DEFAULT_MODEL;
  }

  /**
   * Generate learning sentences and quiz questions for the given topics
   * at the requested depth level.
   *
   * @param {string[]} topics
   * @param {number} depthLevel - 1 = introductory, higher = more advanced
   * @returns {Promise<{sentences: object[], questions: object[]}>}
   */
  async generateContent(topics, depthLevel) {
    const depthLabel = this._depthLabel(depthLevel);
    const topicList = topics.join(', ');

    const prompt = `You are an expert educator. Generate a JSON learning pack for a student.

Topics: ${topicList}
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

    const body = JSON.stringify({
      model: this._model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this._apiKey}`,
        'HTTP-Referer': 'https://github.com/felix-dieterle/4Learners',
        'X-Title': '4Learners',
      },
      body,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`OpenRouter API error ${response.status}: ${text}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? '';

    try {
      return JSON.parse(content);
    } catch {
      throw new Error(`Failed to parse AI response as JSON: ${content}`);
    }
  }

  // ── private ──────────────────────────────────────────────────────────────

  _depthLabel(level) {
    if (level <= 1) return 'introductory';
    if (level === 2) return 'intermediate';
    if (level === 3) return 'advanced';
    return 'expert';
  }
}

module.exports = { AIClient };
