const countFrequencies = require('./countFrequencies').countFrequencies;
const assert = require('./assert.js').assert;

const testGroupElements = function (array, expGroups, description) {
  const actualGroups = countFrequencies(array);
  return assert(actualGroups, expGroups, description);
};

const groupElementsTests = function () {
  testGroupElements([], [], 'Empty element');
  testGroupElements([1], [[1, 1]], 'Single element');
  testGroupElements([1, 3], [[1, 1], [3, 1]], 'Two different elements');
  testGroupElements([1, 2, 1], [[1, 2], [2, 1]], 'Two same and one different element');
  testGroupElements([1, 2, 3, 1, 2], [[1, 2], [2, 2], [3, 1]], 'Multiple elements');
  testGroupElements([[1]], [[[1], 1]], 'Single element as arrays');
  testGroupElements([[1, 1], 1, [1, 1]], [[[1, 1], 2], [1, 1]], 'With number and arrays');
  testGroupElements([[1, [1, 1]], 1, [1, [1, 1]], 1], [[[1, [1, 1]], 2], [1, 2]], 'Nested arrays');
};

groupElementsTests();
