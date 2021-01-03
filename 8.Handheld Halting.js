const fs = require("fs");
const inputCopy = fs
  .readFileSync("8.txt", { encoding: "utf8", flag: "r" })
  .split("\r\n");

for (let i = 0; i < inputCopy.length; i++) {
  const input = fs
    .readFileSync("8.txt", { encoding: "utf8", flag: "r" })
    .split("\r\n");
  //console.log(input[i]);
  if (input[i].includes("acc")) {
    continue;
  }
  if (input[i].includes("jmp")) {
    input[i] = input[i].replace("jmp", "nop");
  } else if (input[i].includes("nop")) {
    input[i] = input[i].replace("nop", "jmp");
  }
  //console.log(input[i]);

  let acc = 0;
  let broke = false;
  let executed = [];
  for (let line = 0; line < input.length; ) {
    if (executed.includes(line)) {
      broke = true;
      console.log("breaking", acc); ///////////////////PART1////////////////////////////
      break;
    }
    executed.push(line);
    const words = input[line].split(" ");
    const op = words[0];
    const arg = Number(words[1]);
    switch (op) {
      case "acc":
        acc += arg;
        line++;
        break;
      case "jmp":
        line += arg;
        break;
      default:
        line++;
        break;
    }
  }
  if (!broke) {
    console.log("done", acc);
    break;
  }
}
