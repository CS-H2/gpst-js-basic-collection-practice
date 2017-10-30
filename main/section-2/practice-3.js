'use strict';

module.exports = function countSameElements(collection) {
	function creatObject(name,summary) {
  	// body...
  	var obj = new Object();
  	obj.name = name;
  	obj.summary = summary;
  	return obj;
  }
  var result = new Array();
  for(var i = 0;i<collection.length;i++){
  	var flag = true;
  	var name = collection[i].charAt(0);
  	var num = 1;
  	if(collection[i].length>1){
  		var num_son = '';
  		for(var k = 0;k<collection[i].length;k++){
  			if(!isNaN(parseInt(collection[i].charAt(k)))){
  				num_son += collection[i].charAt(k);
  			}
  		}
  		num = parseInt(num_son);
  	}
  	for(var j = 0;j<result.length;j++){
	  	if(name==result[j].name){
	  		flag = false;
	  		result[j].summary = result[j].summary+num;
	  	}	  		
	}

  	if (flag) {
		result.push(creatObject(name,num));
  	}
  }
  
  return result;
}
