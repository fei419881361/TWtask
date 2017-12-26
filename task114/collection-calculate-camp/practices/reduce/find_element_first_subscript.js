'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var index = -1;
  for(var i =0;i<collection.length;i++) {
    index++;
    if(element == collection[i]) return index;
  }
}

module.exports = calculate_elements_sum;
var collection = [1,11,27,20,4,9,15,4,1,11];
var element = 4;
calculate_elements_sum(collection,element);

