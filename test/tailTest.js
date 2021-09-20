// TEST CODE
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const numbers = [5,3,4,6,8];
const tailnum = tail(numbers);
for (let i = 0; i < numbers.length; i++) {
  assertEqual(numbers[i + 1], tailnum[i]);
}