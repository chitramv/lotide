// Eq array function
const eqArrays = function(array1,array2) {
    let output = true;
    if(array1.length !== array2.length) return false;
    for (let i=0; i < array1.length ; i ++) {
        if(array1[i] !== array2[i]) output = false;
    }
    return output;
};
// Assert array equal function
const assertArrayEqual = function(actual, expected) {
    if (eqArrays(actual,expected)) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);
};
  // Middle function
const middle = function(array) {
  let middlevalue =[];
  if(array.length <= 2) return middlevalue;
  let l = array.length;
  if(l % 2 === 0) {
    middlevalue = [array[(l/2) - 1],array[(l/2)]];
    return middlevalue;
  }
  middlevalue = [array[(l-1)/2]];
  return middlevalue;
  }
  //console.log(middle([1,2,3,4]));
// Test code
console.log(assertArrayEqual(middle([1]),[])) // => []
console.log(assertArrayEqual(middle([1, 2]),[])) // => []
console.log(assertArrayEqual(middle([1, 2, 3]),[2])) // => [2]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]
console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2,3])) // => [2, 3]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])) // => [3, 4]