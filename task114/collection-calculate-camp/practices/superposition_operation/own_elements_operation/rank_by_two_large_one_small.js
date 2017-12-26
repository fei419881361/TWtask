'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
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
  for (var i = 0;i<resutltbuf.length;i++) {
    if((i+1)%3==0 ) {
      var buf1 = resutltbuf[i - 2];//1 =1      1 2 3  3  2 3  321
      var buf2 = resutltbuf[i - 1];//2 =2
      var buf3 = resutltbuf[i];
      resutltbuf[i - 2] = buf2;
      resutltbuf[i - 1] = buf3;
      resutltbuf[i] = buf1;
    }
  }
  return resutltbuf;
}
module.exports = rank_by_two_large_one_small;
