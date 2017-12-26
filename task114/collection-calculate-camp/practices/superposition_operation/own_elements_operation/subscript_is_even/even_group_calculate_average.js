'use strict';
var even_group_calculate_average = function(collection){

  var result1= [];
  var result2= [];
  var result3= [];
  var resultbuf = [];
  var i =0;
  collection.forEach((val,index)=>{
    if((index+1) % 2 ==0 && val%2==0) {
      i++;
      if(val > 100) {
        // 3
        result3.push(val);
        console.log(val+"-----");

      }else if(val  > 10) {
        //2
        result2.push(val);
      }else {
        //1
        result1.push(val);
      }
    }
  })
  if (i == 0) {
    return [0];
  }
  if (result1.length>=1) resultbuf.push(getAve(result1));
  if (result2.length>=1) resultbuf.push(getAve(result2));
  if (result3.length>=1) resultbuf.push(getAve(result3));
  return resultbuf;
};
function getAve(collection) {
  var ave = 0;
  collection.forEach((val)=> {
    ave += val;
  })
  return ave/collection.length;
}
module.exports = even_group_calculate_average;
