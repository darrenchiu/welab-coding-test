const helpers = require('../helpers');
var assert = require('assert');

describe('getMaxRow function can return max number of rows', function () {
    it('can return correct number of max rows', function () {
        const seatMap = [[3, 2], [4, 3], [2, 3], [3, 4]];
        var maxRow = helpers.getMaxRow(seatMap)
        assert.equal(4, maxRow);
    });

    it('can return 0 if there are no rows', function () {
        const seatMap = [[3, 0], [4, 0], [2, 0], [3, 0]];
        var maxRow = helpers.getMaxRow(seatMap)
        assert.equal(0, maxRow);
    });
});

