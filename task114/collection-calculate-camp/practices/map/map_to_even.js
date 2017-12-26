'use strict';
function map_to_even(collection){
  var result = [];
  collection.forEach((val) =>{
    result.push(val*2);
  })
  return result;
}
module.exports = map_to_even;
