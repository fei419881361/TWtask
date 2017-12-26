function count_same_elements(collection) {
  //在这里写入代码
  var result_colecction = [];

  for(var i=0;i<collection.length;i++) {
    var flag = true;
    var objec = collection[i]; // key
    for(var j = 0;j<result_colecction.length;j++) {
      if(objec == result_colecction[j].key) {
        flag =false;
        result_colecction[j].count++;
      }
    }
    if(flag) {
      result_colecction.push({key:objec,count:1});
    }
  }
  return result_colecction;
}

module.exports = count_same_elements;
