'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  result = collection_a;
  for (var i=0;i<collection_b.length;i++) {
    var flag = true;
    for(var j=0;j<collection_a.length;j++) {
      if(collection_a[j] == collection_b[i])
        flag = false;
    }
    if(flag) {
      result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_union;

