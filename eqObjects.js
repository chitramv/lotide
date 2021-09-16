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
// eq objects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    let output = true;
    if(Object.keys(object1).length !== Object.keys(object2).length) return false;
    let objArr = Object.keys(object1);
    for (const key of objArr){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        console.log(!eqArrays(object1[key],object2[key]));
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

// test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba),true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc),false)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc),true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2),false)); // => false
