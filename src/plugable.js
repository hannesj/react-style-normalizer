'use strict';

var getCssPrefixed = require('./getCssPrefixed')

module.exports = function(target){
	target.plugins = target.plugins || [
		(function(){
			var values = {
				'flex':1,
				'inline-flex':1
			}

			return function(key, value){
				if (key === 'display' && value in values){
					return {
						key: key,
						value: getCssPrefixed(key, value)
					}
				}
			}
		})()
	]

	target.plugin = function(fn){
		target.plugins = target.plugins || []

		target.plugins.push(fn)
	}

	return target
}