'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = new Object();
  collection.forEach(function (val) {
    if(result[val]==undefined) {
      result[val] = 1;
    }else result[val]++;
  })
  return result;
}

module.exports = grouping_count;
