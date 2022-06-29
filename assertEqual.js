// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${[actual]} === ${[expected]}`);
  } else {
    console.log(`Assertion Passed: 🛑🛑🛑 ${[actual]} !== ${[expected]}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, '1');
assertEqual("Hello", "hello");
assertEqual("Harry Potter", "Harry Potter");