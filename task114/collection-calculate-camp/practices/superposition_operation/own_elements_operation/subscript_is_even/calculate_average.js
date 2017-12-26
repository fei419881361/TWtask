'use strict';
var calculate_average = function(collection){

  var result = 0;
  collection.forEach((val)=> {
    if(val%2==0) {
      result += val;
    }
  })
  return result/parseInt(collection.length/2);
}
module.exports = calculate_average;
