'use strict';

var toUpperFirst = require('./toUpperFirst')
var getPrefix    = require('./getPrefix')
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

    if (el.style[key] !== value){

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = prefix + toUpperFirst(key)

            el.style[prefixed] = value

            if (el.style[prefixed] === value){
                key = prefixed
            }
        }
    }

    MEMORY[k] = key

    return key
}