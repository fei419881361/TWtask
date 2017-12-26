'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var result = [];
  var resutltbuf = [];
 result = collection.split('->');
//result = [1,4,6,2,3,10,9,8,11,20,19,30];
  // result.forEach((val)=> {
  //   console.log(val);
  // })
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
    return (resutltbuf[resutltbuf.length/2-1]+resutltbuf[resutltbuf.length/2])/2;
  }else return resutltbuf[parseInt(resutltbuf.length/2)+1];
}

module.exports = compute_chain_median;
compute_chain_median('1->4->6->2->3->10->9->8->11->20->19->30');
