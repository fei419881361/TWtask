'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  while(number >=0) {

    if(number == 0) {
      number = 0;
    }else if(number-interval<0){
      result.push(number);
      result.push(parseFloat((number - interval).toFixed(1)));
      break;
    }
    result.push(number);
    number = parseFloat((number-interval).toFixed(1));
  }
  return result;
}

module.exports = spilt_to_zero;
