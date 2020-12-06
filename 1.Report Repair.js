const fs = require('fs');
const input = fs.readFileSync("1.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");

for (num of input) {
    const search = 2020 - num;
    if (input.includes(String(search))) {
        console.log(num * search) //////////////////////////////////// Part 1 //////////////////////////
        break;
    }
}

for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
        if (i == j) {
            continue;
        }
        const search = 2020 - (Number(input[i]) + Number(input[j]));
        if (input.includes(String(search))) {
            console.log(input[i] * input[j] * search) //////////////////////////////////// Part 2 //////////////////////////
            break;
        }
    }
}