const helpers = require('./helpers');

// input to the program
seatMap = [[3, 2], [4, 3], [2, 3], [3, 4]];
numOfPassengers = 30;

// setting up the computational model
maxCol = helpers.getMaxCol(seatMap); // number of columns in the plan
maxRow = helpers.getMaxRow(seatMap); // max number of rows in the plane
aisleCol = helpers.getAisleCol(seatMap); // column of aisle seats
windowsCol = [0, maxCol - 1];  // column number of window seats
seatingPlan = helpers.zeros([maxRow, maxCol]);   // initial seating map assuming all seat are available
helpers.cancelNonExistentSeats(seatingPlan, seatMap, maxRow);    // cancel out the non-existent seats

// seat assignment process
for (passengerNumber = 0; passengerNumber < numOfPassengers; passengerNumber++) {
  assignBestSeat(seatingPlan, aisleCol, windowsCol, maxCol, maxRow, passengerNumber + 1);
}

// printing out the seat assignement results
// non-existent seats: -1
// empty seats: 0
// assigned seats: passenger number (1-based)
console.log(seatingPlan);

// function that actually do search for a seat for a passenger
function assignBestSeat (seatingPlan, aisleCol, windowsCol, maxCol, maxRow, passengerNumber) {
  // search for any available aisle seats first
  for (row = 0; row < maxRow; row++) {
    for (col = 0; col < aisleCol.length; col++) {
      if (seatingPlan[row][aisleCol[col]] == 0) {
        seatingPlan[row][aisleCol[col]] = passengerNumber;
        return;
      }
    }
  }

  // then search for any available windows seats
  for (row = 0; row < maxRow; row++) {
    for (col = 0; col < windowsCol.length; col++) {
      if (seatingPlan[row][windowsCol[col]] == 0) {
        seatingPlan[row][windowsCol[col]] = passengerNumber;
        return;
      }
    }
  }

  // lastly, search for any other availble seats (center seats)
  for (row = 0; row < maxRow; row++) {
    for (col = 0; col < maxCol; col++) {
      if (seatingPlan[row][col] == 0) {
        seatingPlan[row][col] = passengerNumber;
        return;
      }
    }
  }
}