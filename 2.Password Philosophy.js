const fs = require('fs');
let input = fs.readFileSync("2.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");
input = input.map((line) => {
    return line.split(" ");
})

let invalids = 0;
for (line of input) {
    const pass = line[2];
    const letter = line[1][0];
    const low = Number((line[0].split("-"))[0]);
    const high = Number((line[0].split("-"))[1]);
    const filtered = pass.split("").filter(x => x == letter);
    if (filtered.length > high || filtered.length < low) {
        invalids += 1;
    }
}
console.log(input.length - invalids); //////////////////// PART 1 ////////////////////////////////////

let valids = 0;
for (line of input) {
    const pass = line[2];
    const letter = line[1][0];
    const low = Number((line[0].split("-"))[0]);
    const high = Number((line[0].split("-"))[1]);

    if ((pass[low - 1] == letter && pass[high - 1] != letter) || (pass[low - 1] != letter && pass[high - 1] == letter)) {
        valids += 1;
    }
}
console.log(valids); //////////////////// PART 2 ////////////////////////////////////