'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result = [];
  collection.forEach((val)=>{
    if(val %2==0){
    var char = String.fromCharCode(val+96);
    result.push(char);
    }
  })
  return result;
}

module.exports = even_to_letter;
