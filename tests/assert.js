const isEqual = require('../src/isEqual.js').isEqual;

const assertExpectation = function (actual, expected, description) {
  const testPassed = isEqual(actual, expected);
  const status = testPassed ? '✅' : '❌';

  console.log(status, '-', description);
  return testPassed;
};

exports.assert = assertExpectation;
