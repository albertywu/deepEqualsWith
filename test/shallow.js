var testSuite = require('./testSuite')
var deepEquals = require('../deepEqualsWith')

describe('shallow equality tests', function() {

  it('number assertion', function() {
    var suite = [1, 1, true]
    testSuite(deepEquals, suite)
  })

  it('number rejection', function() {
    var suite = [1, 2, false]
    testSuite(deepEquals, suite)
  })

  it('string assertion', function() {
    var suite = ['1', '1', true]
    testSuite(deepEquals, suite)
  })

  it('string rejection', function() {
    var suite = ['1', '2', false]
    testSuite(deepEquals, suite)
  })

  it('NaN assertion', function() {
    var suite = [NaN, NaN, true]
    testSuite(deepEquals, suite)
  })

  it('NaN rejection', function() {
    var suite = [NaN, null, false]
    testSuite(deepEquals, suite)
  })

  it('Object assertion', function() {
    var suite = [{ foo: 'bar' }, { foo: 'bar' }, true]
    testSuite(deepEquals, suite)
  })

  it('Object rejection', function() {
    var suite = [{ foo: 'bar' }, { foo: 'baz' }, false]
    testSuite(deepEquals, suite)
  })

  it('Array assertion', function() {
    var suite = [[1,2,3], [1,2,3], true]
    testSuite(deepEquals, suite)
  })

  it('Array rejection', function() {
    var suite = [[1,2,3], [3,2,1], false]
    testSuite(deepEquals, suite)
  })

})
