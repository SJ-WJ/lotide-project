// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  if (actual !== expected) console.log(`Assertion Failed: 🛑🛑🛑 ${actual} !== ${expected}`);
  return;
};

module.exports = assertEqual;