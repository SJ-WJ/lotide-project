// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = (array) => {
  if (array === []) {
    return undefined;
  }

  for (let i = 0; i < array.length; i++) {
    return array[0];
  }

};

module.exports = head;