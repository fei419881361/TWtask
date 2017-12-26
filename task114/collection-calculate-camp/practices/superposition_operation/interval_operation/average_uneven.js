'use strict';

function average_uneven(collection) {

  //在这里写入代码
  //在这里写入代码
  var result = 0;
  collection.forEach((val)=>{
    if(val % 2!=0) {
      result += val;
    }
  })
  return result/(collection.length/2);
}

module.exports = average_uneven;
