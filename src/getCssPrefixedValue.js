'use strict';

var getPrefix     = require('./getPrefix')
var forcePrefixed = require('./forcePrefixed')
var el            = require('./el')

var MEMORY = {}
var STYLE = el.style

module.exports = function(key, value){

    var k = key + ': ' + value

    if (MEMORY[k]){
        return MEMORY[k]
    }

    var prefix
    var prefixed
    var prefixedValue

    if (!(key in STYLE)){

        prefix = getPrefix('appearance')

        if (prefix){
            prefixed = forcePrefixed(key, value)

            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

            if (prefixed in STYLE){
                el.style[prefixed] = ''
                el.style[prefixed] = prefixedValue

                if (el.style[prefixed] !== ''){
                    value = prefixedValue
                }
            }
        }
    }

    MEMORY[k] = value

    return value
}