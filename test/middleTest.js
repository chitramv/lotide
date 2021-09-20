const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');
// Test code
console.log(assertArrayEqual(middle([1]),[])) // => []
console.log(assertArrayEqual(middle([1, 2]),[])) // => []
console.log(assertArrayEqual(middle([1, 2, 3]),[2])) // => [2]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]
console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2,3])) // => [2, 3]
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])) // => [3, 4]