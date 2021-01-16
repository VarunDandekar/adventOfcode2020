const fs = require("fs");
const input = fs
  .readFileSync("10.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n")
  .map((x) => Number(x))
  .sort((a, b) => a - b);
input.unshift(0); //first
input.push(input[input.length - 1] + 3); //device

let oneDiff = 0;
let threeDiff = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i + 1] - input[i] == 1) {
    oneDiff++;
  } else if (input[i + 1] - input[i] == 3) {
    threeDiff++;
  }
}

console.log(oneDiff * threeDiff); //////////////PART1///////////////////////

const howManys = [];
input.forEach((x) => {
  let howMany = 0;
  for (let i = 1; i <= 3; i++) {
    if (input.includes(x + i)) {
      howMany++;
    }
  }
  howManys.push(howMany);
});
howManys.pop(); // remove last 0

let noOfWays = 1;
for (let i = 0; i < howManys.length; i++) {
  if (howManys[i] == 1) {
    continue;
  }
  noOfWays *= calculateNoWays(i);
  i += howManys[i] - 1;
}
console.log("PART2", noOfWays);

function calculateNoWays(x) {
  let j = howManys[x]; // no. of ways of a plural
  let noForJ = 0;
  for (let k = x + 1; k <= x + j; k++) {
    noForJ += howManys[k] == 3 ? calculateNoWays1(k) : howManys[k]; // if it is 3 then go next level
  }
  return noForJ;
}

function calculateNoWays1(x) {
  let j = howManys[x]; // no. of ways of a plural
  let noForJ = 0;
  for (let k = x + 1; k <= x + j; k++) {
    noForJ += howManys[k];
  }
  return noForJ;
}
