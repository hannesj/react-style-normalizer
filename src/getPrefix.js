'use strict';

var toUpperFirst = require('./toUpperFirst')
var prefixes     = ["ms", "Moz", "Webkit", "O"]

var el = require('./el')

var PREFIX

module.exports = function(key){

	if (PREFIX){
		return PREFIX
	}

	var i = 0
	var len = prefixes.length
	var tmp
	var prefix

	for (; i < len; i++){
		prefix = prefixes[i]
		tmp = prefix + toUpperFirst(key)

		if (typeof el.style[tmp] != 'undefined'){
			return PREFIX = prefix
		}
	}
}