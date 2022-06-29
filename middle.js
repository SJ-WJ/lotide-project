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

const middle = function(array) {
  const middleNums = Math.floor(array.length / 2);
  let middlePart = [];

  for (let i = 0; i < array.length; i++) {

    if (array.length <= 2) {
      return middlePart;
    }
    if (array.length % 2 === 1) {
      return array[middleNums];
    }
    if (array.length % 2 === 0) {
      return [array[middleNums - 1], array[middleNums]];
    }
  }
};



// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]