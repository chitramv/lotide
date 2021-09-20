const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['a','b','c'],['a','b','c']),true);

