const assertEqual = require('./assertEqual');
// Eq array function
const eqArrays = function(array1,array2) {
  let output = true;
  if(array1.length !== array2.length) return false;
  for (let i=0; i < array1.length ; i ++) {
      if(array1[i] !== array2[i]) output = false;
  }
  return output;
}

module.exports = eqArrays;