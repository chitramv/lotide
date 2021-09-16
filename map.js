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

// create a map function which takes two parameters
// one an array and second one a cb function
// return a map of array based on the function
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
let output = [];
for (let item of array) {
  output.push(callback(item));
}
return output;
}
const results1 = map(words, word => word[0]);
console.log(results1);
assertArrayEqual(map(['word','sentence','phrases'],item => item[0]),['w','s','p']);