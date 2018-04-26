import {assert} from 'chai';
import {CountTime, timer} from './game-statistic';

describe(`Check timer value`, () => {
  it(`should update timer value`, () => {
    assert.equal(timer.tick(), 9);
    assert.equal(timer.tick(), 8);
  });
  it(`should not allow set negative value`, () => {
    assert.throws(() => new CountTime(-1), /Value should not be negative number/);
  });
  it(`should not allow set not number value`, () => {
    assert.throws(() => new CountTime([]), /Value should be a number/);
  });
});
