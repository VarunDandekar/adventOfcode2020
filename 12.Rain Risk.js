const fs = require("fs");
let input = fs
  .readFileSync("12.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n");

const E = "E",
  N = "N",
  S = "S",
  W = "W",
  R = "R",
  L = "L",
  F = "F";

let eastDist = 0;
let northDist = 0;
let curDir = E;
let directions = {};
directions[E] = { R90: S, R180: W, R270: N, L90: N, L180: W, L270: S };
directions[W] = { R90: N, R180: E, R270: S, L90: S, L180: E, L270: N };
directions[S] = { R90: W, R180: N, R270: E, L90: E, L180: N, L270: W };
directions[N] = { R90: E, R180: S, R270: W, L90: W, L180: S, L270: E };

for (line of input) {
  const op = line[0];
  const arg = Number(line.substring(1));
  switch (op) {
    case L:
    case R:
      curDir = directions[curDir][line];
      break;
    case F:
      switch (curDir) {
        case E:
          eastDist += arg;
          break;
        case N:
          northDist += arg;
          break;
        case W:
          eastDist -= arg;
          break;
        case S:
          northDist -= arg;
          break;
      }
      break;
    default:
      switch (op) {
        case E:
          eastDist += arg;
          break;
        case N:
          northDist += arg;
          break;
        case W:
          eastDist -= arg;
          break;
        case S:
          northDist -= arg;
          break;
      }
  }
}

console.log(Math.abs(eastDist) + Math.abs(northDist)); ////////////////////////PART1//////////////////

const sameMap = new Map([
  ["R270", "L90"],
  ["R90", "L270"],
  ["R180", "L180"],
]);

const cos = (deg) => Math.round(Math.cos((deg * Math.PI) / 180));
const sin = (deg) => Math.round(Math.sin((deg * Math.PI) / 180));

function rotate(px, py, theta) {
  return [cos(theta) * px - sin(theta) * py, sin(theta) * px + cos(theta) * py];
}

function rotateWayPoint(line, way) {
  let inputTemp = sameMap.has(line) ? sameMap.get(line) : line;
  let value = Number(inputTemp.substring(1));
  return rotate(way[0], way[1], value);
}

let ship = [0, 0];
let way = [10, 1];
for (line of input) {
  const op = line[0];
  const arg = Number(line.substring(1));
  switch (op) {
    case L:
    case R:
      way = rotateWayPoint(line, way);
      break;
    case F:
      ship[0] += arg * way[0];
      ship[1] += arg * way[1];
      break;
    case N:
      way[1] += arg;
      break;
    case S:
      way[1] -= arg;
      break;
    case E:
      way[0] += arg;
      break;
    case W:
      way[0] -= arg;
      break;
  }
}

console.log(Math.abs(ship[0]) + Math.abs(ship[1])); //////////////////// PART2 //////////////////////////////////
