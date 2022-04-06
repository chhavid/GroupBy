const isEqual = require('./isEqual.js').isEqual;

const frequency = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return groups[index][1]++;
    }
  }
  return groups.push([element, 1]);
};

const countFrequency = function (list) {
  const count = [];
  for (let index = 0; index < list.length; index++) {
    frequency(list[index], count);
  }
  return count;
};

exports.countFrequencies = countFrequency;
