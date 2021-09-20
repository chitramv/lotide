// Assert Equalfunction
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);

  };
 // Count letter function
 const countLetters = function(string) {
 const results = {};
 string = string.replace(/ /g,'');
 for (const letter of string) {
     if(results[letter]) results[letter] += 1;
     else results[letter] = 1;
 }
 return results
 };
 // test
 console.log(countLetters("lighthouse in the house"));

 module.exports = countLetters;