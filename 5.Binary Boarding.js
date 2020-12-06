const fs = require('fs');
let input = fs.readFileSync("5.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");

let seats = []

for (line of input) {
    let low = 0;
    let high = 127;
    let left = 0;
    let right = 7;
    const rows = line.substring(0, 7);
    const col = line.substring(7)

    for (dir of rows) {
        switch (dir) {
            case 'F':
                high = (low + high - 1) / 2;
                break;
            case 'B':
                low = (low + high + 1) / 2
                break;

        }
    }

    for (dir of col) {
        switch (dir) {
            case 'L':
                right = (left + right - 1) / 2;
                break;
            case 'R':
                left = (left + right + 1) / 2
                break;

        }
    }

    const seatId = low * 8 + left;
    seats.push(seatId);
}

console.log(Math.max(...seats))                     ///////////////////// PART1 ////////////////////////////

seats = seats.sort((a, b) => a - b)
for (i = 0; i < seats.length - 1; i++) {
    if (seats[i] + 1 !== seats[i + 1]) {
        console.log(seats[i] + 1)                   /////////////////////// PART2 ///////////////////////////
        break;
    }
}