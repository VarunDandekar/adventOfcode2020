const fs = require('fs');
let input = fs.readFileSync("6.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");
let groups = [];

let group = new Set();
let sum = 0;
input = input.map((line) => {
    if (line !== '') {
        line.split("").forEach(letter => group.add(letter));
    } else {
        groups.push(group);
        sum += group.size;
        group = new Set();
    }
})
groups.push(group) // push the last line
sum += group.size;

console.log(sum) /////////////////////////// PART1 ///////////////////////////////


sum = 0;
let members = 0;
let answers = [];
input = fs.readFileSync("6.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");
input = input.map((line) => {
    if (line !== '') {
        members++;
        if (members == 1) {
            answers = line.split("");    // answers of first member
        } else {
            // next members
            answers = line.split("").filter(letter => answers.includes(letter));
        }
    } else {
        sum += answers.length;
        members = 0;
        answers = [];
    }
})

sum += answers.length;
console.log(sum) /////////////////////////// PART2 /////////////////////////////// 3489

