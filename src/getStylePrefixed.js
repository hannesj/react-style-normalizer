'use strict';

var toUpperFirst = require('./toUpperFirst')
var getPrefix    = require('./getPrefix')
var el           = require('./el')

var MEMORY = {}
var STYLE = el.style

module.exports = function(key, value){

    var k = key// + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    var prefix
    var prefixed

    if (!(key in STYLE)){//we have to prefix

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = prefix + toUpperFirst(key)

            if (prefixed in STYLE){
                key = prefixed
            }
        }
    }

    MEMORY[k] = key

    return key
}