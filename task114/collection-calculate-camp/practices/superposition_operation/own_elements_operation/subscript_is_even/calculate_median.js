'use strict';
var calculate_median = function(collection){
  var result =[];
  for (var i =1;i<collection.length;i+=2) {
    result.push(collection[i]);
  }
  console.log(result.length);
  if(result.length % 2 ==0) {
    return (result[parseInt((result.length)/2)] + result[parseInt((result.length/2 +1)/2)])/2;
  }else {
    return result[parseInt(3/2)];
  }
}
module.exports = calculate_median;
