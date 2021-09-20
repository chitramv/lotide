const assertEqual = require('./assertEqual');
const tail = function(array) {
  let arraynew = array.slice(1);
  return (arraynew);
};
module.exports = tail;