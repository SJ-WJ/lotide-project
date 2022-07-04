// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  const arrayCompare = eqArrays(actual, expected);

  if (arrayCompare === true) console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  if (arrayCompare !== true) console.log(`Assertion Failed: 🛑🛑🛑 ${actual} !== ${expected}`);
  return;

};

module.exports = assertArraysEqual;