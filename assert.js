const isEqual = require('./isEqual').isEqual;

const assertExpectation = function (actual, expected, description) {
  const testPassed = isEqual(actual, expected);
  const status = testPassed ? '✓' : 'x';

  console.log(status, '-', description);
  return testPassed;
};

exports.assert = assertExpectation;
