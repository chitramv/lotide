// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`);
  } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);
};
const tail = function(array) {
  let arraynew = array.slice(1);
  return (arraynew);
};
// TEST CODE
const numbers = [5,3,4,6,8];
const tailnum = tail(numbers);
for (let i = 0; i < numbers.length; i++) {
  assertEqual(numbers[i + 1], tailnum[i]);
}