'use strict';

var el

module.exports = function(){

	console.log(global.document)

	if(!el && !!global.document){
	  	el = global.document.createElement('div')
	}

	return el
}