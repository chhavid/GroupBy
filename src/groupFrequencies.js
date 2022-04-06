const isEqual = require('./isEqual.js').isEqual;

const countOccurence = function (element, groups) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(element, groups[index][0])) {
      return groups[index][1]++;
    }
  }
  return groups.push([element, 1]);
};

const groupFrequencies = function (list) {
  const count = [];
  for (let index = 0; index < list.length; index++) {
    countOccurence(list[index], count);
  }
  return count;
};

exports.groupFrequencies = groupFrequencies;
