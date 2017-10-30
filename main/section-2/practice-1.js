'use strict';

module.exports = function countSameElements(collection) {
  function creatObject(key,count) {
  	// body...
  	var obj = new Object();
  	obj.key = key;
  	obj.count = count;
  	return obj;
  }

  var result = new Array();
  for(var i = 0;i<collection.length;i++){
  	var flag = true;
  	for(var j = 0;j<result.length;j++){
	  	if(collection[i]==result[j].key){
	  		flag = false;
	  		result[j].count++;
	  	}	  		
	}
  	if (flag) {
		result.push(creatObject(collection[i],1));
  	}
  }
  
  return result;
}
