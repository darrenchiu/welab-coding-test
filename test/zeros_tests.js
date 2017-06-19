const helpers = require('../helpers');
var assert = require('assert');

describe('Zeros function can correctly initialize 2D array of zeros', function () {
    it('can return initialize a 2X3 array of zeros', function () {
        var resultGrid = helpers.zeros([2, 3])
        // two rows
        assert.equal(2, resultGrid.length);
        // each row have 3 columns
        assert.equal(3, resultGrid[0].length);
        assert.equal(3, resultGrid[1].length);

        // each value is initialized as 0
        for (i = 0; i<3; i++){
            assert.equal(0, resultGrid[0][i]);
        }

        for (i = 0; i<3; i++){
            assert.equal(0, resultGrid[1][i]);
        }

    });

    it('will not throw error if it have a zero number of rows', function () {
        var resultGrid = helpers.zeros([0, 3])
        assert.equal(0, resultGrid.length);
    });

    it('will not throw error if it have a zero number of columns', function () {
        var resultGrid = helpers.zeros([2, 0])
        assert.equal(2, resultGrid.length);
        assert.equal(0, resultGrid[0].length);
        assert.equal(0, resultGrid[1].length);
    });
});

