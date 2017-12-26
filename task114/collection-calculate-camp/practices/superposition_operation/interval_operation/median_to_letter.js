'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var zhong = 0;
  var result = [];
  var resutltbuf = [];
  result = collection;

  for (var i=0;i<result.length;i++) {
    resutltbuf.push(parseInt(result[i]));
  }
  console.log("------------");
  for (var i =0;i<resutltbuf.length-1;i++) {
    for (var j=0;j<resutltbuf.length-i-1;j++) {
      if(resutltbuf[j]>resutltbuf[j+1]) {
        var temp = resutltbuf[j];
        resutltbuf[j] = resutltbuf[j+1];
        resutltbuf[j+1] = temp;
      }
    }
  }

  resutltbuf.forEach((val)=> {
    console.log(val);
  })
  if(resutltbuf.length %2 == 0) {
    zhong = parseInt(((resutltbuf[resutltbuf.length/2-1]+resutltbuf[resutltbuf.length/2])/2));
  }else zhong = (resutltbuf[parseInt(resutltbuf.length/2)]);
  var num = parseInt(zhong / 26);
  var num2 = parseInt(zhong % 26);
  var str = String.fromCharCode(num+96) + String.fromCharCode(num2+97);
  return str;
}

module.exports = median_to_letter;

var collection = [20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53];
median_to_letter(collection);
