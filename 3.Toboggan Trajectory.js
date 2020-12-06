const fs = require('fs');
let inputX = fs.readFileSync("3.txt", { encoding: 'utf8', flag: 'r' })
// console.log(inputX)

inputX = inputX.split('\r\n')
let input = inputX.map((line) => {
    return line.split("");
})

const rows = inputX.length;
const cols = inputX[0].length
let x = 0;
let y = 0;
const jumpX = 2;
const jumpY = 1;

let trees = 0;

for (x = jumpX; x < rows; x = x + jumpX) {
    y = ((y + jumpY) % cols);
    // console.log(x, y)
    if (input[x][y] == '#') {
        trees += 1;
    }
}
console.log(trees) /////////////////////////////// PART1 ////////////////////////////////////////////////

// 79, 234, 72, 91, 48


console.log(79 * 234 * 72 * 91 * 48) ///////////////////// PART2 ///////////////////////////////////////
