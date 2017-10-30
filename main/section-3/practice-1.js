'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	function creatObject(key,count) {
  	// body...
  	var obj = new Object();
  	obj.key = key;
  	obj.count = count;
  	return obj;
  }
  var result = [];
  for(var i = 0;i<collectionA.length;i++){
  	for(var j = 0;j<objectB.value.length;j++){
  		if(collectionA[i].key == objectB.value[j]){
  			collectionA[i].count--;
  		}
  	}
  }
  return collectionA;
}
