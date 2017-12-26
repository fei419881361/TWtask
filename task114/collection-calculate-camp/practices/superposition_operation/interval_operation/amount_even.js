'use strict';

function amount_even(collection) {

  //在这里写入代码
  var result = 0;
  collection.forEach((val)=>{
    if(val % 2==0) {
      result += val;
    }
  })
  return result;
}

module.exports = amount_even;
