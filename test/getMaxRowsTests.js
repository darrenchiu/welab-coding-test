const helpers = require('../helpers');
const assert = require('chai').assert;

describe('getAisleCol function can return column number of aisle seats', function () {
  it('can return correct column number of aisle seats', function () {
    const seatMap = [[3, 2], [4, 3], [2, 3], [3, 4]];
    var aisleColumns = helpers.getAisleCol(seatMap);
    assert.deepEqual([2, 3, 6, 7, 8, 9], aisleColumns);
  });
});

