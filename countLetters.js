// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Passed: 🛑🛑🛑 ${[actual]} !== ${[expected]}`);
  }

};

const countLetters = function(string) {
  const lettersAmount = {};

  for (const letters of string) {
    if (letters === " ") {
      continue;
    }

    if (lettersAmount[letters]) {
      lettersAmount[letters] += 1;

    } else {
      lettersAmount[letters] = 1;

    }
  } return lettersAmount;
  
};

const test = countLetters("Lighthouse Labs");
console.log(test);