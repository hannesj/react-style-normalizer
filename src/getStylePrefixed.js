'use strict';

var toUpperFirst = require('./toUpperFirst')
var getPrefix    = require('./getPrefix')
var el           = require('./el')

var MEMORY = {}

module.exports = function(key, value){

    var k = key// + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    el.style[key] = ''
    el.style[key] = value

    var prefix
    var prefixed

    if (el.style[key] !== ''){

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = prefix + toUpperFirst(key)

            el.style[prefixed] = ''
            el.style[prefixed] = value

            if (el.style[prefixed] !== ''){
                key = prefixed
            }
        }
    }

    MEMORY[k] = key

    return key
}