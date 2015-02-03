'use strict';

var toUpperFirst = require('./toUpperFirst')
var getPrefix    = require('./getPrefix')
var getPrefixed  = require('./getPrefixed')
var el           = require('./el')

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

        prefix   = getPrefix('appearance')
        prefixed = getPrefixed(key)

        prefixedValue = '-' + prefix.toLowerCase() + '-' + value

        el.style[prefixed] = prefixedValue

        if (el.style[prefixed] === prefixedValue){
            value = prefixedValue
        }
    }

    MEMORY[k] = value

    return value
}