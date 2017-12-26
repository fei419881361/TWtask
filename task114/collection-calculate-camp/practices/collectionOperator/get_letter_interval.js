'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a <= number_b) {
    for (var i=number_a;i<=number_b;i++) {
      result.push(String.fromCharCode(97+i-1));
    }
  }else {
    for (var i=number_a;i>=number_b;i--) {
      result.push(String.fromCharCode(97+i-1));
    }
  }
return result;
}

module.exports = get_letter_interval;
