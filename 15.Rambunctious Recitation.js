const fs = require("fs");
let input = fs
  .readFileSync("15.txt", { encoding: "utf8", flag: "r" })
  .split(",")
  .map((x) => Number(x));

const history = new Map();
input.forEach((x, y) => history.set(x, [y]));
console.log(history);

// const turns = 2020 // part 1
const turns = 30000000; // part 2

for (let i = input.length; i < turns; i++) {
  const num = input.pop();
  const numHistory = history.get(num);
  const numHistoryLen = numHistory.length;
  const newNum =
    numHistoryLen == 1
      ? 0
      : numHistory[numHistoryLen - 1] - numHistory[numHistoryLen - 2];
  if (history.has(newNum)) {
    const newNumHistory = history.get(newNum);
    if (newNumHistory.length > 1) {
      newNumHistory.shift();
    }
    newNumHistory.push(i);
    history.set(newNum, newNumHistory);
  } else {
    history.set(newNum, [i]);
  }
  input.push(num, newNum);
}

console.log(input[turns - 1]); ////////////////// PART1&2 ///////////
