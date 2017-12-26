'use strict';
function array_contain(array, obj){
  for (var i = 0; i < array.length; i++){
    if (array[i] == obj)
      return true;
  }
  return false;
}
var is_exist_element = function(collection,element){
  var result = [];
  for (var i = 0;i<collection.length;i++) {
    if(i%2==0) {
      result.push(collection[i]);
    }
  }
  if (array_contain(result,element)) {
    return true;
  }else {
    return false;
  }
};
module.exports = is_exist_element;
