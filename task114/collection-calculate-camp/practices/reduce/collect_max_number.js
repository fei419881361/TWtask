'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max =0;
  collection.forEach(function (val) {
    if(max <= val) {
      max = val;
    }
  });

  return max;
}

module.exports = collect_max_number;
