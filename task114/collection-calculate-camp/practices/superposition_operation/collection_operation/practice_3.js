'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = 0;
  collection.forEach((val)=>{
    if(val % 2!=0) {
      result+=val*3+5;
    }
  })
  return result;
}

module.exports = hybrid_operation_to_uneven;

