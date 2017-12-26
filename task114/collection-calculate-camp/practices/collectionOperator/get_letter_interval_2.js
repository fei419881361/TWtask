'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a <= number_b) {
    for (var i = number_a ; i<= number_b;i++) {
      var num = parseInt(i/26);
      var num2 = parseInt(i %26);
      if(num2 == 0) {
        num --;
        var str = "";
        if(num>0) {
          str = String.fromCharCode(num+96);
        }
        str +=String.fromCharCode(97+25);
        result.push(str);
        continue;
      }
      if(num !=0) {
        var str1 = String.fromCharCode(num+96);
        str1 += String.fromCharCode(num2+96);
        result.push(str1);
      }else {
        var str1 = String.fromCharCode(num2+96);
        result.push(str1);
      }
      console.log(str1);
    }
  }else {
    for (var i = number_a ; i>= number_b;i--) {
      var num = parseInt(i/26);
      var num2 = parseInt(i %26);
      if(num2 == 0) {
        num --;
        var str = "";
        if(num>0) {
          str = String.fromCharCode(num+96);
        }
        str +=String.fromCharCode(97+25);
        result.push(str);
        continue;
      }
      if(num !=0) {
        var str1 = String.fromCharCode(num+96);
        str1 += String.fromCharCode(num2+96);
        result.push(str1);
      }else {
        var str1 = String.fromCharCode(num2+96);
        result.push(str1);
      }
    }
    console.log(str1);
  }
  return result;
}

module.exports = get_letter_interval_2;

