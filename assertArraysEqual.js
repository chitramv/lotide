// Eq array function
const eqArrays = function(array1,array2) {
    let output = true;
    if(array1.length !== array2.length) return false;
    for (let i=0; i < array1.length ; i ++) {
        if(array1[i] !== array2[i]) output = false;
    }
    return output;
  }
  // Assert array equal function
  const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);

  };
  assertArrayEqual([7,5,6],[7,5,6]);
  assertArrayEqual([7,'5',6],[7,5,6]);