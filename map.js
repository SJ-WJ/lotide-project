// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  let arrayCompare = eqArrays(actual, expected);
  if (arrayCompare === true) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

module.exports = map;


//TEST CODE
const words = ["boston", "celtics", "are", "champions"];
const tvShows = ["Prison Break", "Criminal Minds", "Smart Guy", "Lost"];

const result1 = map(words, word => word[0]);
console.log(result1);

const result2 = map(tvShows, show => show);
console.log(result2);