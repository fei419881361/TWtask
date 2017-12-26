'use strict';
function sortNumberToBig(a, b) {
  return a - b;
}
function sortNumberToSamll(a, b) {
  return b - a;
}
var even_asc_odd_desc = function (collection) {
  var evenResult = [];
  var oddResult = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      evenResult.push(collection[i]);
    } else {
      oddResult.push(collection[i]);
    }
  }
  return evenResult.sort(sortNumberToBig).concat(oddResult.sort(sortNumberToSamll));
};
module.exports = even_asc_odd_desc;
