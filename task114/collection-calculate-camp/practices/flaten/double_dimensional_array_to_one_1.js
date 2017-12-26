'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function (t) {
    if(t[0] == undefined) {
      result.push(t);
    }else {
      for (var i =0;i<t.length;i++) {
        result.push(t[i]);
      }
    }
  })

  return result;
}

module.exports = double_to_one;
