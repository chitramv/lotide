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

// function take until takes items from array until the call back function becomes truthy
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if(!callback(item)) result.push(item);
    else break;
  }
  return result;
}

module.exports = takeUntil;
// Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(assertArrayEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(assertArrayEqual(takeUntil(data2, x => x === ','),["I've","been","to","Hollywood"]));