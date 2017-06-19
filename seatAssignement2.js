const helpers = require('./helpers');

// input to the program
const seatMap = [[3, 2], [4, 3], [2, 3], [3, 4]];
const numOfPassengers = 30;

// setting up the computational model
const maxCol = helpers.getMaxCol(seatMap); // number of columns in the plan
const maxRow = helpers.getMaxRow(seatMap); // max number of rows in the plane
const aisleCol = helpers.getAisleCol(seatMap); // column of aisle seats
const windowsCol = [0, maxCol - 1];  // column number of window seats
var seatingPlan = helpers.zeros([maxRow, maxCol]);   // initial seating map assuming all seat are available
helpers.cancelNonExistentSeats(seatingPlan, seatMap, maxRow);    // cancel out the non-existent seats

// start to assign seats
// assign aisle seats
var currentPassengerNumber = 1;
for (row = 0; row < maxRow; row++) {
  for (col = 0; col < aisleCol.length && currentPassengerNumber <= numOfPassengers; col++) {
    if (seatingPlan[row][aisleCol[col]] == 0) {
      seatingPlan[row][aisleCol[col]] = currentPassengerNumber;
      currentPassengerNumber++;
    }
  }
}

// then assign windows seats
for (row = 0; row < maxRow; row++) {
  for (col = 0; col < windowsCol.length && currentPassengerNumber <= numOfPassengers; col++) {
    if (seatingPlan[row][windowsCol[col]] == 0) {
      seatingPlan[row][windowsCol[col]] = currentPassengerNumber;
      currentPassengerNumber++;
    }
  }
}

// lastly, assign center seats
for (row = 0; row < maxRow; row++) {
  for (col = 0; col < maxCol && currentPassengerNumber <= numOfPassengers; col++) {
    if (seatingPlan[row][col] == 0) {
      seatingPlan[row][col] = currentPassengerNumber;
      currentPassengerNumber++;
    }
  }
}

// print out seating plan
console.log(seatingPlan);