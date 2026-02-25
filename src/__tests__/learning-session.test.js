'use strict';

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { InterestTracker } = require('../interest-tracker');
const { LearningSession } = require('../learning-session');

const SENTENCES = [
  { id: 's1', topic: 'physics', text: 'Light travels at 299,792 km/s.', detail: 'More info.' },
  { id: 's2', topic: 'biology', text: 'DNA is a double helix.', detail: 'Extra detail.' },
  { id: 's3', topic: 'physics', text: 'E = mc².', detail: null },
];

describe('LearningSession', () => {
  let tracker;
  let session;

  beforeEach(() => {
    tracker = new InterestTracker();
    session = new LearningSession(tracker, [...SENTENCES]);
  });

  it('starts at index 0 with hasNext true', () => {
    assert.equal(session.currentIndex, 0);
    assert.ok(session.hasNext);
    assert.equal(session.currentSentence.id, 's1');
  });

  it('markOpened advances the index and records opened signal', () => {
    session.markOpened();
    assert.equal(session.currentIndex, 1);
    assert.ok(tracker.getScore('physics') > 0);
  });

  it('markTellMeMore advances and records tell_me_more signal', () => {
    session.markTellMeMore();
    assert.equal(session.currentIndex, 1);
    // tell_me_more weight > opened weight
    const tmm = tracker.getScore('physics');

    const tracker2 = new InterestTracker();
    const session2 = new LearningSession(tracker2, [...SENTENCES]);
    session2.markOpened();
    const opened = tracker2.getScore('physics');

    assert.ok(tmm > opened);
  });

  it('markSkipped advances and records skipped signal', () => {
    session.markSkipped();
    assert.equal(session.currentIndex, 1);
    assert.ok(tracker.getScore('physics') < 0);
  });

  it('hasNext becomes false after all sentences are processed', () => {
    session.markOpened();
    session.markOpened();
    session.markOpened();
    assert.ok(!session.hasNext);
    assert.equal(session.currentSentence, null);
  });

  it('throws when calling markOpened on completed session', () => {
    session.markOpened();
    session.markOpened();
    session.markOpened();
    assert.throws(() => session.markOpened(), /complete/);
  });

  it('getEvents returns all recorded events in order', () => {
    session.markOpened();
    session.markTellMeMore();
    session.markSkipped();

    const events = session.getEvents();
    assert.equal(events.length, 3);
    assert.equal(events[0].action, 'opened');
    assert.equal(events[1].action, 'tell_me_more');
    assert.equal(events[2].action, 'skipped');
  });
});
