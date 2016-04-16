var testSuite = require('./testSuite')
var deepEquals = require('../deepEqualsWith')

describe('deep equality tests', function() {

  it('deep arrays assertion', function() {
    var suite = [
      [
        [1,2,[3,4]]
      ],
      [
        [1,2,[3,4]]
      ],
      true
    ]
    testSuite(deepEquals, suite)
  })

  it('deep arrays rejection', function() {
    var suite = [
      [
        [1,2,[3,4]]
      ],
      [
        [1,2,[4,5]]
      ],
      false
    ]
    testSuite(deepEquals, suite)
  })

  it('deep arrays - uses custom equality fn', function() {
    var suite = [
      [
        [1,2,[3,4]]
      ],
      [
        [1,2,[4,5]]
      ],
      true
    ]
    var primitiveComparers = {
      number: (a, b) => {
        return Math.abs(a - b) < 2
      }
    }
    testSuite(deepEquals, suite, primitiveComparers)
  })

  it('deep objects assertion', function() {
    var suite = [
      {
        foo: {
          bar: [1,2,3]
        }
      },
      {
        foo: {
          bar: [1,2,3]
        }
      },
      true
    ]
    testSuite(deepEquals, suite)
  })

  it('deep objects rejection', function() {
    var suite = [
      {
        foo: {
          bar: [1,2,3]
        }
      },
      {
        foo: {
          bar: [1,2,4]
        }
      },
      false
    ]
    testSuite(deepEquals, suite)
  })

  it('deep objects - uses custom equality fn', function() {
    var suite = [
      {
        foo: {
          bar: [1,2,3]
        }
      },
      {
        foo: {
          bar: [1,2,4]
        }
      },
      true
    ]
    var primitiveComparers = {
      number: (a, b) => {
        return Math.abs(a - b) < 2
      }
    }
    testSuite(deepEquals, suite, primitiveComparers)
  })

})
