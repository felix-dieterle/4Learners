'use strict';

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { InterestTracker, FAST_ANSWER_THRESHOLD_MS } = require('../interest-tracker');

describe('InterestTracker', () => {
  let tracker;

  beforeEach(() => {
    tracker = new InterestTracker();
  });

  it('starts with no scores', () => {
    assert.deepEqual(tracker.getTopInterests(), []);
    assert.equal(tracker.getScore('physics'), 0);
  });

  it('increases score on opened', () => {
    tracker.recordOpened('physics');
    assert.ok(tracker.getScore('physics') > 0);
  });

  it('increases score more on tell_me_more than on opened', () => {
    tracker.recordTellMeMore('biology');
    tracker.recordOpened('chemistry');
    assert.ok(tracker.getScore('biology') > tracker.getScore('chemistry'));
  });

  it('decreases score on skipped', () => {
    tracker.recordSkipped('history');
    assert.ok(tracker.getScore('history') < 0);
  });

  it('increases score strongly for fast + correct quiz answer', () => {
    tracker.recordQuizAnswer('maths', true, FAST_ANSWER_THRESHOLD_MS - 1);
    assert.ok(tracker.getScore('maths') > 0);
  });

  it('decreases score for slow or wrong quiz answer', () => {
    tracker.recordQuizAnswer('maths', true, FAST_ANSWER_THRESHOLD_MS + 1);
    assert.ok(tracker.getScore('maths') < 0);

    tracker.recordQuizAnswer('science', false, 100);
    assert.ok(tracker.getScore('science') < 0);
  });

  it('getTopInterests returns only positive scores, sorted descending', () => {
    tracker.recordTellMeMore('a'); // +3
    tracker.recordTellMeMore('a'); // +3  => 6
    tracker.recordOpened('b');     // +1  => 1
    tracker.recordSkipped('c');    // -1  => -1 (not included)

    const top = tracker.getTopInterests();
    assert.equal(top.length, 2);
    assert.equal(top[0].topic, 'a');
    assert.equal(top[1].topic, 'b');
    assert.ok(top[0].score > top[1].score);
  });

  it('serialises and deserialises correctly', () => {
    tracker.recordTellMeMore('space');
    tracker.recordSkipped('art');

    const json = tracker.toJSON();
    const tracker2 = new InterestTracker();
    tracker2.fromJSON(json);

    assert.equal(tracker2.getScore('space'), tracker.getScore('space'));
    assert.equal(tracker2.getScore('art'), tracker.getScore('art'));
  });
});
