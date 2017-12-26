function collect_same_elements(collectionA, objectB) {
  //在这里写入代码
  var result_collection = [];
  var object_collection = objectB.value;
  for(var i =0;i<collectionA.length;i++) {
    var num = collectionA[i]
    for(var j=0;j<object_collection.length;j++) {
      if(num == object_collection[j])
        result_collection.push(num);
    }
  }
  return result_collection;
}

module.exports = collect_same_elements;
