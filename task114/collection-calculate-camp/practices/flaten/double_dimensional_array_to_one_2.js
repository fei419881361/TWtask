'use strict';

function canAdd(num,collection) {
  for (var i =0;i<collection.length;i++) {
    if(num == collection[i]) {
      return false;
    }
  }
  return true;
}
var result = [];
function double_to_one(collection) {

  //在这里写入代码
  for (var i=0;i<collection.length;i++) {
    if(collection[i][0]==undefined) {
      if(canAdd(collection[i],result)) {
        result.push(collection[i]);
      }
    }else {
      for (var j = 0;j<collection[i].length;j++) {
        if(canAdd(collection[i][j],result)) {
          result.push(collection[i][j]);
        }
      }
    }
  }
  return result;
}

module.exports = double_to_one;
