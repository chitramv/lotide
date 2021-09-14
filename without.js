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
 // function to remove unwanted elements from an array
 const without = function(source,itemsToRemove){
    let newArray = [];
    for (let i = 0; i < source.length; i++){
        for (let j= 0; j < itemsToRemove.length ; j++) {
            if (source[i]!==itemsToRemove[j] && source.includes(itemsToRemove[j]))
              newArray.push(source[i]);
        }
    }
  return newArray;
}
assertArrayEqual(without([1,3,4,5],[4]),[1,3,5]);
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);