

// test using mocha and chai
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5,4,3,8]", () => {
    assert.strictEqual(head([5,4,3,8]), 5);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello for ['Hello','Lighthouse','Labs']" , () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});