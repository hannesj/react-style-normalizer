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

    var prefix = getPrefix('appearance')
    var prefixed = getPrefixed(key)

    var prefixedValue = '-' + prefix.toLowerCase() + '-' + value

    el.style[prefixed] = prefixedValue

    if (el.style[prefixed] === prefixedValue){
        value = prefixedValue
    }

    MEMORY[k] = value

    return value
}