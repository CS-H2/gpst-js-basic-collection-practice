'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  function creatObject(key,count) {
  	// body...
  	var obj = new Object();
  	obj.key = key;
  	obj.count = count;
  	return obj;
  }
  var result = new Array();
  for(var i = 0;i<collectionA.length;i++){
  	var flag = true;
  	for(var j = 0;j<result.length;j++){
	  	if(collectionA[i]==result[j].key){
	  		flag = false;
	  		result[j].count++;
	  	}	  		
	}
	if(collectionA[i].length>1){
  		flag = false;
  		result.push(creatObject(collectionA[i].split('-')[0],parseInt(collectionA[i].split('-')[1])));
	}
  	if (flag) {
		result.push(creatObject(collectionA[i],1));
  	}
  }
  for(var i = 0;i<result.length;i++){
  	for(var j = 0;j<objectB.value.length;j++){
  		if(result[i].key == objectB.value[j]){;
  			if(result[i].count/3>0){
  				result[i].count -= Math.floor(result[i].count/3);
  			}
  		}
  	}
  }
  return result;
}
