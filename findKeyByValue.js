// AssertEqual function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed ${actual} === ${expected}`);
    } else  console.log(`Assertion Failed  ${actual} !==  ${expected}`);

  };
 // Find key by value function
 const findKeyByValue = function(object,value) {
     for (const property in object) {
       if(object[property] === value)
       return(property);
     }
 };

 module.exports = findKeyByValue;


 // test
 const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);