// AssertEqual function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);

  };
// Eq array function
const eqArrays = function(array1,array2) {
  let output = true;
  if(array1.length !== array2.length) return false;
  for (let i=0; i < array1.length ; i ++) {
      if(array1[i] !== array2[i]) output = false;
  }
  return output;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);