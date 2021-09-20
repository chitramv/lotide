// Middle function
const middle = function(array) {
  let middlevalue =[];
  if(array.length <= 2) return middlevalue;
  let l = array.length;
  if(l % 2 === 0) {
    middlevalue = [array[(l/2) - 1],array[(l/2)]];
    return middlevalue;
  }
  middlevalue = [array[(l-1)/2]];
  return middlevalue;
  }
  module.exports = middle;
