'use strict';

var el

module.exports = function(){

	// console.log(global.document)
	// console.log(window)
	// console.log(document)

	if(!el && !!global.document){
	  	el = global.document.createElement('div')
	}

	if (!el){
		el = {style: {}}
	}

	return el
}