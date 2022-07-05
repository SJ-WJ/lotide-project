// TEST CODE
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail - Case 1", () => {

  const result = ["Hello", "Lighthouse", "Labs"];
  it(`Should return a length of 2`, () => {
    assert.strictEqual(tail(result).length, 2);
  });

  it(`Should the index of 0 for Lighthouse`, () => {
    assert.strictEqual(tail(result)[0], "Lighthouse");
  });

  it(`Should the index of 1 for Labs`, () => {
    assert.strictEqual(tail(result)[1], "Labs");
  });

});

describe("#tail - Case 2", () => {

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it(`The array before the use of tail should have a length of 3`, () => {
    assert.strictEqual(words.length, 3);
  });

  it(`After the use of tail it should return a new array with the length of 2`, () => {
    assert.strictEqual(tail(words).length, 2);
  });

});