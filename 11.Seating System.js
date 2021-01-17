const fs = require("fs");
let input1 = fs
  .readFileSync("11.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n")
  .map((x) => x.split(""));

function getNeighbours(i, j) {
  let neighbours = 0;
  for (let I = i - 1; I <= i + 1; I++) {
    for (let J = j - 1; J <= j + 1; J++) {
      if (
        (i == I && j == J) ||
        I < 0 ||
        J < 0 ||
        I >= input.length ||
        J >= input[0].length
      ) {
        continue;
      }
      if (input[I][J] == "#") {
        neighbours++;
      }
    }
  }
  return neighbours;
}

let changed = true;
while (changed) {
  changed = false; //initialize
  input = [];
  input1.forEach((x) => {
    input.push(x.slice());
  });
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == "L" && getNeighbours(i, j) == 0) {
        changed = true;
        input1[i][j] = "#";
      } else if (input[i][j] == "#" && getNeighbours(i, j) >= 4) {
        changed = true;
        input1[i][j] = "L";
      }
    }
  }
}

let final = 0;
input.forEach((x) => {
  x.forEach((y) => {
    if (y == "#") {
      final++;
    }
  });
});
console.log(final); //////////////////////////PART1/////////////////

input1 = fs
  .readFileSync("11.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n")
  .map((x) => x.split(""));

function getNeighbours1(i, j) {
  let neighbours = 0;
  if (i > -1) {
    let I = i - 1; //up
    while (I > -1 && input[I][j] == ".") {
      I--;
    }

    if (I > -1 && input[I][j] == "#") {
      neighbours++;
    }
  }
  if (j > -1) {
    let J = j - 1; //left
    while (J > -1 && input[i][J] == ".") {
      J--;
    }
    if (J > -1 && input[i][J] == "#") {
      neighbours++;
    }
  }
  if (i < input.length) {
    let I = i + 1; //down
    while (I < input.length && input[I][j] == ".") {
      I++;
    }
    if (I < input.length && input[I][j] == "#") {
      neighbours++;
    }
  }
  if (j < input[0].length) {
    let J = j + 1; //right
    while (J < input[0].length && input[i][J] == ".") {
      J++;
    }
    if (J < input[0].length && input[i][J] == "#") {
      neighbours++;
    }
  }
  if (i > -1 && j > -1) {
    let I = i - 1; //up
    let J = j - 1; //left
    while (I > -1 && J > -1 && input[I][J] == ".") {
      I--;
      J--;
    }
    if (I > -1 && J > -1 && input[I][J] == "#") {
      neighbours++;
    }
  }
  if (i < input.length && j > -1) {
    let I = i + 1; //down
    let J = j - 1; //left
    while (I < input.length && J > -1 && input[I][J] == ".") {
      I++;
      J--;
    }
    if (I < input.length && J > -1 && input[I][J] == "#") {
      neighbours++;
    }
  }
  if (i < input.length && j < input[0].length) {
    let I = i + 1; //down
    let J = j + 1; //right
    while (I < input.length && J < input[0].length && input[I][J] == ".") {
      I++;
      J++;
    }
    if (I < input.length && J < input[0].length && input[I][J] == "#") {
      neighbours++;
    }
  }
  if (i > -1 && j < input[0].length) {
    let I = i - 1; //up
    let J = j + 1; //right
    while (I > -1 && J < input[0].length && input[I][J] == ".") {
      I--;
      J++;
    }
    if (I > -1 && J < input[0].length && input[I][J] == "#") {
      neighbours++;
    }
  }
  return neighbours;
}

changed = true;
while (changed) {
  changed = false; //initialize
  input = [];
  input1.forEach((x) => {
    input.push(x.slice());
  });

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == "L" && getNeighbours1(i, j) == 0) {
        changed = true;
        input1[i][j] = "#";
      } else if (input[i][j] == "#" && getNeighbours1(i, j) >= 5) {
        changed = true;
        input1[i][j] = "L";
      }
    }
  }
}

final = 0;
input.forEach((x) => {
  x.forEach((y) => {
    if (y == "#") {
      final++;
    }
  });
});
console.log(final); //////////////////////////PART2/////////////////
