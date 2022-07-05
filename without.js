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

const without = (array1, array2) => {
  const emptyArray = [];

  for (let i = 0; i < array1.length; i++) {
    const array1Val = array1[i];
    let isMatch = false;

    for (let j = 0; j < array2.length; j++) {
      const array2Val = array2[j];

      if (array1Val === array2Val) {
        isMatch = true;
      }
    }
    if (isMatch === false) {
      emptyArray.push(array1Val);
    }
  }
  return emptyArray;
};

module.exports = without;

// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]