// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  const middleNums = Math.floor(array.length / 2);
  const middlePart = [];

  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) return middlePart;
    if (array.length % 2 === 1) return array[middleNums];
    if (array.length % 2 === 0) return [array[middleNums - 1], array[middleNums]];
  }
};

module.exports = middle;