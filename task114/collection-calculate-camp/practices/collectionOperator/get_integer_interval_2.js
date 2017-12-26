'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  
  if(number_a % 2 == 0){
    arr = addnum(number_a,number_b,arr); 
  }else{
    if(number_a!=number_b)
    number_a>number_b?(arr=addnum(number_a-1,number_b,arr)):(arr = addnum(number_a+1,number_b,arr));
  }
  return arr
}
function addnum(number_a,number_b,arr){
  if(number_a >= number_b){
    while(number_a>=number_b){
      arr.push(number_a);
      number_a -= 2;
    }
  }else{
    while(number_a <= number_b){
      arr.push(number_a);
      number_a += 2;
    }
  }
  return arr;
}

module.exports = get_integer_interval_2;
