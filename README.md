# welab-coding-test
Airplane seating algorithm

### Algorithm in short ###
We will first setup a big 2D array to represent whole seating plan, with `0` as empty seat and `-1` as non-existent seat (as the seating plan is not always perfect rectangular shape)

We will store the column number of aisle seats and windows seats in separate variables.

Lastly, we will search for best seats for each passengers by:
1. going row by row to look for aisle seats from left to right
2. going row by row to look for windows seats from left to right
3. going row by row to look for center seats from left to right

### Running Instructions ###
On any machine with node installed, run the following to setup the environment. You may skip this step if you don't plan to run unit tests

```npm install```

To run "For each passenger, search for best seat" algorithm

```node seatAssignment.js```

To run "Seat the passengers one by on" algorithm

```node seatAssignment2.js```

To run unit tests

```./node_modules/mocha/bin/mocha```

### Input ###
There are two input for the program
1. a 2D array that represents the rows and columns: `[[3, 2], [4, 3], [2, 3], [3, 4]]`
2. number of passengers waiting in queue

This could be change in the beginning of `seat_assignment.js`

### Output ###
Output is a seating plan represeted by a 2D array, with 
1. `-1` denoting non-existent seats
2. `0` denoting empty seats
3. `passenger number` denoting assigned seats (1-based)
```
[ 
    [ 19, 25, 1, 2, 26, 27, 3, 4, 5, 6, 28, 20 ],
    [ 21, 29, 7, 8, 30, 0, 9, 10, 11, 12, 0, 22 ],
    [ -1, -1, -1, 13, 0, 0, 14, 15, 16, 17, 0, 23 ],
    [ -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 0, 24 ]
]
```

### Limitations ###
1. Only part of the functions are unit tested
2. The program assumes that there are always enough seats for all passengers, i.e. number of seats >= number of passengers
