// Tail test using mocha and chai
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [4,3,8] for [5,4,3,8]", () => {
    assert.deepEqual(tail([5,4,3,8]), [4,3,8]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

});