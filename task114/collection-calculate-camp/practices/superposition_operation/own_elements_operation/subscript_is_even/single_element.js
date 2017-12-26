'use strict';
function array_contain(array, obj) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == obj) {
      count++;
    }
  }
  return count;
}
var single_element = function (collection) {
  var middleResult = [];
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 == 0) {
      middleResult.push(collection[i]);
    }
  }
  var finalResult = [];
  for (var i = 0;i<middleResult.length;i++) {
    if (array_contain(middleResult, middleResult[i]) == 1) {
      finalResult.push(middleResult[i]);
    }
  }
  return finalResult;
};
module.exports = single_element;
