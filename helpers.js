module.exports = {
  // to mark the non-existent seats as -1
  cancelNonExistentSeats: function (seatingPlan, seatMap, maxRow) {
    totalSeatInPreviousBlocks = 0;
    for (i = 0; i < seatMap.length; i++) {
      startToCancelRow = seatMap[i][1];
      endToCancelRow = maxRow;
      startToCancelCol = totalSeatInPreviousBlocks;
      endToCancelCol = totalSeatInPreviousBlocks + seatMap[i][0];

      for (j = startToCancelRow; j < endToCancelRow; j++) {
        for (k = startToCancelCol; k < endToCancelCol; k++) {
          seatingPlan[j][k] = -1;
        }
      }
      totalSeatInPreviousBlocks += seatMap[i][0];
    }
  },
  getAisleCol: function (seatMap) {
    aisleCol = [];
    totalSeatInPreviousBlocks = 0;
    for (i = 0; i < seatMap.length; i++) {
      // leftmost block with 1 aisle seat
      if (i == 0) {
        aisleCol.push(seatMap[i][0] - 1);
      }
      // rightmost block with 1 aisle seat
      else if (i == seatMap.length - 1) {
        aisleCol.push(totalSeatInPreviousBlocks);
      }
      // other blocks with 2 aisle seats
      else {
        aisleCol.push(totalSeatInPreviousBlocks);
        aisleCol.push(totalSeatInPreviousBlocks + seatMap[i][0] - 1);
      }
      totalSeatInPreviousBlocks += seatMap[i][0];
    }
    return aisleCol;
  },
  getMaxCol: function (seatMap) {
    sum = 0;
    for (i = 0; i < seatMap.length; i++) {
      sum += seatMap[i][0];
    }
    return sum;
  },
  getMaxRow: function (seatMap) {
    max = 0;
    for (i = 0; i < seatMap.length; i++) {
      if (seatMap[i][1] > max) {
        max = seatMap[i][1];
      }
    }
    return max;
  },
  // dimensions is in the format of [numberOfRow, numberOfColumn]
  zeros: function (dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
      array.push(dimensions.length == 1 ? 0 : this.zeros(dimensions.slice(1)));
    }

    return array;
  },
};