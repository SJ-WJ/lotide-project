// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  let arrayCompare = eqArrays(actual, expected);

  if (arrayCompare === true) {
    console.log(`Assertion Passed: ✅✅✅ ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Passed: 🛑🛑🛑 ${[actual]} !== ${[expected]}`);
  }

};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] in results) {
      results[sentence[i]].push(i);
      console.log(sentence[i] in results);

    } else {
      results[sentence[i]] = [i];

    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("goodbye").o, [3]);