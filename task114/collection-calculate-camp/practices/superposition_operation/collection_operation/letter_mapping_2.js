'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = 0;
  collection.forEach((val)=> {
    sum += val;
  })
  sum = parseInt(sum / collection.length);
  return String.fromCharCode(97+sum);
}

module.exports = average_to_letter;

