function create_updated_collection(collectionA, objectB) {
  //在这里写入代码
  var object_value = objectB.value;
  for(var i =0;i<collectionA.length;i++) {
    var vaya = collectionA[i];
    for(var j =0;j<object_value.length;j++) {
      if (vaya.key == object_value[j]) {
        vaya.count--;
        continue;
      }
    }
  }
  return collectionA;
}

module.exports = create_updated_collection;
