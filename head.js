// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Passed: 🛑🛑🛑 ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  if (array === []) {
    return undefined;
  }

  for (let i = 0; i < array.length; i++) {
    return array[0];
  } 

};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 2);
assertEqual(head(["Pineapple", "Olive", "Chicken"]), "Chicken");

console.log("Check1", head([1, 2, 3]));
console.log("Check2", head([]));