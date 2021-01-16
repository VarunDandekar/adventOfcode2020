const fs = require("fs");
const input = fs
  .readFileSync("9.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n");

let num;
const preemble = 25;
const window = [];
for (line of input) {
  if (window.length < preemble) {
    window.push(Number(line));
  } else {
    if (
      !window.some((num) => window.includes(line - num) && num !== line / 2)
    ) {
      num = line;
      console.log("num", line); /////////////////PART1///////////////////////
      break;
    }
    window.shift();
    window.push(Number(line));
  }
}

let found = false;
for (i = 0; i < input.length; i++) {
  let sum = 0;
  for (j = i; j < input.length; j++) {
    sum += Number(input[j]);
    if (sum > num) {
      break;
    } else if (sum == num) {
      found = true;
      const clipped = input.slice(i, j + 1).map((x) => Number(x));
      console.log("clipped", clipped);
      console.log(Math.max(...clipped) + Math.min(...clipped));
      break;
    }
  }
  if (found) {
    break;
  }
}
