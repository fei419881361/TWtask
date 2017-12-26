'use strict';

function choose_multiples_of_three(collection) {

  var result = [];
  collection.forEach(function (val,index,array) {
    if (val %3 ==0) {
      result.push(val);
    }
  })
  return result;
}

module.exports = choose_multiples_of_three;
