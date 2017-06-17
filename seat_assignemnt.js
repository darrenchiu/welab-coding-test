seatMap = [[3, 2],[4, 3],[2, 3],[3, 4]]
numOfPassengers = 30

maxCol = getMaxCol(seatMap)
maxRow = getMaxRow(seatMap)

aisleCol = getAisleCol(seatMap)
windowsCol = [0, maxCol-1]
rowPriority = getRowPriorities(aisleCol, windowsCol, maxCol)
seatingPlan = zeros([maxRow, maxCol])
cancelNonExistentSeats(seatingPlan, seatMap, maxRow)

// console.log(maxCol)
// console.log(maxRow)
// console.log(aisleCol)
// console.log(windowsCol)
// console.log(rowPriority)
// console.log(seatingPlan)

for (passengerNumber = 0; passengerNumber< numOfPassengers; passengerNumber++){
    assignBestSeat(seatingPlan, aisleCol, windowsCol, passengerNumber + 1)
}

console.log(seatingPlan)


function assignBestSeat(seatingPlan, aisleCol, windowsCol, passengerNumber){
    for (row = 0; row < maxRow; row++){
        for (col = 0; col < aisleCol.length; col++){
            if (seatingPlan[row][aisleCol[col]]== 0 ){
                seatingPlan[row][aisleCol[col]] = passengerNumber
                return
            }
        }
    }

    for (row = 0; row < maxRow; row++){
        for (col = 0; col < windowsCol.length; col++){
            if (seatingPlan[row][windowsCol[col]]== 0 ){
                seatingPlan[row][windowsCol[col]] = passengerNumber
                return
            }
        }
    }

    for (row = 0; row < maxRow; row++){
        for (col = 0; col < maxCol; col++){
            if (seatingPlan[row][col]== 0 ){
                seatingPlan[row][col] = passengerNumber
                return
            }
        }
    }
}

function cancelNonExistentSeats(seatingPlan, seatMap, maxRow){
    totalSeatInPreviousBlocks = 0
    for(i = 0; i< seatMap.length; i++){
        startToCancelRow = seatMap[i][1]
        endToCancelRow = maxRow
        startToCancelCol = totalSeatInPreviousBlocks
        endToCancelCol = totalSeatInPreviousBlocks + seatMap[i][0]

        for (j = startToCancelRow; j<endToCancelRow; j++){
            for (k = startToCancelCol; k<endToCancelCol; k++){
                seatingPlan[j][k] = -1
            }
        }
        totalSeatInPreviousBlocks += seatMap[i][0]
    }
}

function getRowPriorities(aisleCol, windowsCol, maxCol){
    seatPriorities = aisleCol.concat(windowsCol)

    for(i = 0; i<maxCol; i++){
        if (seatPriorities.indexOf(i) == -1){
            seatPriorities.push(i)
        }
    }
    return seatPriorities
}

function getAisleCol(seatMap){
    aisleCol = []
    totalSeatInPreviousBlocks = 0
    for (i = 0; i < seatMap.length; i++){
        if (i == 0){
            aisleCol.push(seatMap[i][0]-1)
        } 
        else if (i == seatMap.length-1){
            aisleCol.push(totalSeatInPreviousBlocks)
        }
        else {
            aisleCol.push(totalSeatInPreviousBlocks)    
            aisleCol.push(totalSeatInPreviousBlocks + seatMap[i][0]-1)
        }
        totalSeatInPreviousBlocks += seatMap[i][0]
    }
    return aisleCol
}

function getMaxCol(seatMap){
    sum = 0
    for(i = 0; i < seatMap.length; i++){
        sum += seatMap[i][0]
    }
    return sum
}

function getMaxRow(seatMap){
    max = 0
    for(i = 0; i < seatMap.length; i++){
        if (seatMap[i][1] > max){
            max = seatMap[i][1]
        }
    }
    return max
}


function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}