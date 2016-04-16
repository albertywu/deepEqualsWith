// utility function to make testing more succinct

var assert = require('chai').assert

function testSuite(fn, suite, primitiveComparers) {
  assert.equal(
    fn(suite[0], suite[1], primitiveComparers),
    suite[2]
  )
}

module.exports = testSuite
