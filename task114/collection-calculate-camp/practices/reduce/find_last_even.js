'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var last = 0;
  for(var i =0;i<collection.length;i++) {
    if(collection[i]%2 == 0) {
     last = collection[i];
    }
  }
  return last;

}

module.exports = find_last_even;
