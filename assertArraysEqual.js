const eqArrays = require('./eqArrays');
  // Assert array equal function
  const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);

  };
  module.exports = assertArrayEqual;