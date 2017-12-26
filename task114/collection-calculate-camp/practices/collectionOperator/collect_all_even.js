'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let collection_even = [];
  collection.forEach(element => {
    if (element % 2 == 0){
      collection_even.push(element);
    }
  });
  return collection_even;
}

module.exports = collect_all_even;
