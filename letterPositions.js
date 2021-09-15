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
// Letter position function
const letterPositions = function(sentence) {
    const results = {};
    //sentence = sentence.replace(/ /g,'');
    let i = 0;
    for ( const letter of sentence) {
        if(letter === ' '){
             i++; continue;}
        if(results[letter]) results[letter].push(i);
        else results[letter] = [i];
        i++;
    }
    return results;
  };
  // Test
  console.log(letterPositions("lighthouse in the house"));