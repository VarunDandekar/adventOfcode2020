const { strict } = require('assert');
const fs = require('fs');
let input = fs.readFileSync("4.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n")
const passports = [];

let passport = ""
input = input.map((line) => {
    if (line !== '') {
        if (passport !== "") {
            passport += " "
        }
        passport += line;
    } else {
        passports.push(passport);
        passport = ""
    }
})
passports.push(passport) // push the last line

function checkBirthYear(inp) {
    if (inp.length !== 4) {
        return false;
    }
    if (Number(inp) < 1920 || Number(inp) > 2002) {
        return false;
    }
    return true;
}

function checkIssueYear(inp) {
    if (inp.length !== 4) {
        return false;
    }
    if (Number(inp) < 2010 || Number(inp) > 2020) {
        return false;
    }
    return true;
}

function checkExpirationYear(inp) {
    if (inp.length !== 4) {
        return false;
    }
    if (Number(inp) < 2020 || Number(inp) > 2030) {
        return false;
    }
    return true;
}

function checkHeight(inp) {
    let num = inp.substring(0, inp.length - 2);
    if (inp.includes("cm")) {
        if (Number(num) < 150 || Number(num) > 193) {
            return false;
        }
        return true;
    }
    if (inp.includes("in")) {
        if (Number(num) < 59 || Number(num) > 76) {
            return false;
        }
        return true;
    }
    return false;
}

function checkHairColor(inp) {
    if (inp[0] !== "#") {
        return false;
    }
    if (inp.length !== 7) {
        return false;
    }
    if (inp.match(/#[0-9a-f]*/)) {
        return true;
    }
    return false;
}

function checkEyeColor(inp) {
    if (inp == "amb" || inp == "blu" || inp == "gry" || inp == "brn" || inp == "grn" || inp == "hzl" || inp == "oth") {
        return true;
    }
    return false;
}

function checkPassportNumber(inp) {
    if (inp.length !== 9) {
        return false;
    }
    if (typeof Number(inp) == "number") {
        return true
    }
    return false;
}

const validPassports = []
for (passport of passports) {
    fields = passport.split(" ");
    if (fields.length < 7) {
        continue;
    }

    if (!passport.includes("byr:")) {
        continue;
    }
    if (!passport.includes("iyr:")) {
        continue;
    }
    if (!passport.includes("eyr:")) {
        continue;
    }
    if (!passport.includes("hgt:")) {
        continue;
    }
    if (!passport.includes("hcl:")) {
        continue;
    }
    if (!passport.includes("ecl:")) {
        continue;
    }
    if (!passport.includes("pid:")) {
        continue;
    }

    ////////////// PART2 addition /////////////////
    if (!fields.every((x) => {
        if (x.includes("byr:") && !checkBirthYear(x.substring(4))) {
            return false;
        }
        if (x.includes("iyr:") && !checkIssueYear(x.substring(4))) {
            return false;
        }
        if (x.includes("eyr:") && !checkExpirationYear(x.substring(4))) {
            return false;
        }
        if (x.includes("hgt:") && !checkHeight(x.substring(4))) {
            return false;
        }
        if (x.includes("hcl:") && !checkHairColor(x.substring(4))) {
            return false;
        }
        if (x.includes("ecl:") && !checkEyeColor(x.substring(4))) {
            return false;
        }
        if (x.includes("pid:") && !checkPassportNumber(x.substring(4))) {
            return false;
        }
        return true;

    })) {
        continue;
    }
    //////////////////////////////////////////////
    validPassports.push(passport);
}

console.log(validPassports.length)