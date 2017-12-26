'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  arr = addnum(number_a,number_b,arr);
  return arr;
}
function addnum(number_a,number_b,arr){
  if(number_a >= number_b){
    while(number_a>=number_b){
      arr.push(number_a);
      number_a --;
    }
  }else{
    while(number_a <= number_b){
      arr.push(number_a);
      number_a ++;
    }
  }
  return arr;
}

module.exports = get_integer_interval;

