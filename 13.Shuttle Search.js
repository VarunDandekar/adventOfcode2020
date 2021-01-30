const fs = require("fs");
let input = fs
  .readFileSync("13.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n");

const timestamp = Number(input[0]);
const allBuses = input[1].split(",");
const buses = allBuses.filter((x) => x !== "x").map((x) => Number(x));

const minTimes = buses.map((x) => {
  return x - (timestamp % x);
});
const minTime = Math.min(...minTimes);
const minBus = buses[minTimes.indexOf(minTime)];
console.log(minBus * minTime); /////////////////////////// PART1 //////////////////////////////

const busMap = new Map();
buses.forEach((x) => {
  busMap.set(x, allBuses.indexOf(String(x)));
});

let inc = 1;
let num = 0;
let prev = buses[0];
for (let i in buses) {
  if (i == 0) continue;
  let bus = buses[i];
  let busIndex = busMap.get(bus);
  inc *= prev;
  prev = bus;
  while (true) {
    num += inc;
    if ((num + busIndex) % bus == 0) {
      break;
    }
  }
}

console.log(num); //////////////////////////PART2////////////////////////////////////////
