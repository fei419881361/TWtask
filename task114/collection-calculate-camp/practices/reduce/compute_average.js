'use strict';

function compute_average(collection) {
  //在这里写入代码
  var average =0;
  for (var i =0;i<collection.length;i++) {
    average += collection[i];
  }
  return (average/collection.length);
}

module.exports = compute_average;

