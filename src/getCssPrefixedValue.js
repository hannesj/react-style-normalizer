'use strict';

var getPrefix     = require('./getPrefix')
var forcePrefixed = require('./forcePrefixed')
var el            = require('./el')

var MEMORY = {}

module.exports = function(key, value){

    var k = key + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    el.style[key] = value

    var prefix
    var prefixed
    var prefixedValue

    if (el.style[key] !== value){

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = forcePrefixed(key, value)

            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

            el.style[prefixed] = prefixedValue

            if (el.style[prefixed] === prefixedValue){
                value = prefixedValue
            }
        }
    }

    MEMORY[k] = value

    return value
}