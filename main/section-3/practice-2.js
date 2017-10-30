'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  function creatObject(key,count) {
  	// body...
  	var obj = new Object();
  	obj.key = key;
  	obj.count = count;
  	return obj;
  }
  for(var i = 0;i<collectionA.length;i++){
  	for(var j = 0;j<objectB.value.length;j++){
  		if(collectionA[i].key == objectB.value[j]){;
  			if(collectionA[i].count/3>0){
  				collectionA[i].count -= Math.floor(collectionA[i].count/3);
  			}
  		}
  	}
  }
  return collectionA;
}
