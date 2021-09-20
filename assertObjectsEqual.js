// Eq array function
const eqArrays = function(array1,array2) {
    let output = true;
    if(array1.length !== array2.length) return false;
    for (let i=0; i < array1.length ; i ++) {
        if(array1[i] !== array2[i]) output = false;
    }
    return output;
  }
// eq objects function
const eqObjects = function(object1, object2) {
    let output = true;
    if(Object.keys(object1).length !== Object.keys(object2).length) return false;
    let objArr = Object.keys(object1);
    for (const key of objArr){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          output = false;
          return output;
        }
      continue;
      }
      if(object1[key] !== object2[key]){
        output = false;
      }
    }
  return output;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if(eqObjects(actual,expected)){
        console.log(`Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
    } else  console.log(`Assertion Failed  ${inspect(actual)} !==  ${inspect(expected)}`);
    };
// test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

