const helpers = require('../helpers');
var assert = require('assert');

describe('getMaxCol function can return total number of columns', function () {
    it('can return correct number of columns', function () {
        const seatMap = [[3, 2], [4, 3], [2, 3], [3, 4]];
        var maxCol = helpers.getMaxCol(seatMap)
        assert.equal(12, maxCol);
    });

    it('can return 0 if there are no columns', function () {
        const seatMap = [[0, 2], [0, 3], [0, 3], [0, 4]];
        var maxCol = helpers.getMaxCol(seatMap)
        assert.equal(0, maxCol);
    });
});

