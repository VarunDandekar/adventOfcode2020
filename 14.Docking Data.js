const fs = require("fs");
let input = fs
  .readFileSync("14.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n");

let mask = new Map();
let mem = new Map();

function applyMask(inp) {
  let inp1 = Number(inp).toString(2).padStart(36, 0);
  inp1 = inp1.split("");
  mask.forEach((val, pos) => {
    inp1[pos] = val;
  });
  inp1 = inp1.join("");
  return parseInt(inp1, 2);
}

for (line of input) {
  if (line.includes("mask")) {
    mask = new Map();
    line
      .substring(7)
      .split("")
      .forEach((x, y) => {
        if (x != "X") {
          mask.set(y, x);
        }
      });
  } else {
    let [loc, inp] = line.split(" = ");
    loc = loc.replace("mem[", "").replace("]", "");
    const op = applyMask(inp);
    mem.set(loc, op);
  }
}

let sum = 0;
mem.forEach((x) => (sum += x));
console.log(sum); //////////////PART1///////////////////////////////

// If the bitmask bit is 0, the corresponding memory address bit is unchanged.
// If the bitmask bit is 1, the corresponding memory address bit is overwritten with 1.
// If the bitmask bit is X, the corresponding memory address bit is floating.
mask = new Map();
mem = new Map();

function applyMaskToAddress(loc) {
  let inp1 = Number(loc).toString(2).padStart(36, 0);
  inp1 = inp1.split("");
  const outputs = [];
  mask.forEach((val, pos) => {
    if (val !== "X") {
      inp1[pos] = val;
    } else {
      inp1[pos] = "0";
    }
  });
  inp1 = inp1.join("");
  inp1 = parseInt(inp1, 2);
  outputs.push(inp1);
  // replace Xs
  mask.forEach((val, pos) => {
    if (val === "X") {
      const pow = 2 ** (35 - pos);
      const x = outputs.map((num) => num + pow);
      outputs.push(...x);
    }
  });
  return outputs;
}

for (line of input) {
  if (line.includes("mask")) {
    mask = new Map();
    line
      .substring(7)
      .split("")
      .forEach((x, y) => {
        if (x != "0") {
          mask.set(y, x);
        }
      });
  } else {
    let [loc, inp] = line.split(" = ");
    loc = loc.replace("mem[", "").replace("]", "");
    const op = applyMaskToAddress(loc);
    op.forEach((loc) => mem.set(loc, Number(inp)));
  }
}

sum = 0;
mem.forEach((x) => (sum += x));
console.log(sum); //////////////PART2///////////////////////////////
