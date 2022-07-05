// TEST CODE
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it(`If the length of the array is not greater than 2 it should return empty`, () => {
    const middle1 = [1];
    const middle2 = [1, 2];
    assert.deepEqual(middle(middle1), []);
    assert.deepEqual(middle(middle2), []);
  });

  it(`If the length of the array is odd grab the middle element of the array`, () => {
    const middle1 = [1, 2, 3];
    const middle2 = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(middle1), 2);
    assert.deepEqual(middle(middle2), 3);
  });

  it(`If the length of the array is even grab the middle most elements of the array`, () => {
    const middle1 = [1, 2, 3, 4];
    const middle2 = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(middle1), [2, 3]);
    assert.deepEqual(middle(middle2), [3, 4]);
  });

});