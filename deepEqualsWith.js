var isEqual = require('lodash.isequal')
var type = require('type-of')

function deepEqualsWith(a, b, primitiveComparers) {

  // return false if a, b are different types
  if (type(a) !== type(b)) {
    return false
  }

  // if array...
  if (type(a) === 'array') {
    if (a.length !== b.length) {
      return false
    }
    return (a.reduce((p, c, i) => {
      return p && deepEqualsWith(c, b[i], primitiveComparers)
    }, true))
  }

  // if object...
  else if (type(a) === 'object') {
    var keysA = Object.keys(a).sort()
    var keysB = Object.keys(b).sort()
    if (!isEqual(keysA, keysB)) {
      return false
    }
    return (keysA.reduce((p, c) => {
      return p && deepEqualsWith(a[c], b[c], primitiveComparers)
    }, true))
  }

  // if primitive...
  else {
    var equalityFn
    if (primitiveComparers && primitiveComparers[type(a)]) {
      equalityFn = primitiveComparers[type(a)]
    } else {
      equalityFn = isEqual
    }
    return equalityFn(a, b)
  }

}

module.exports = deepEqualsWith
