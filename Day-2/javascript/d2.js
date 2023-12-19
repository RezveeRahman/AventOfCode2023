/**
 * @Author: Rezvee Rahman
 * 
 * Day 2, advent of code solution in javascript
 */

var fileReader = require('fs');

console.log("Day 2 Problem 1");

var lines = fileReader.readFileSync("AOCD22023.txt").toString().split("\n");

// console.log(lines);

function captureRGB(liIn) {
    const regR = new RegExp(/[\d]+ red/g);
    const regG = new RegExp(/[\d]+ green/g);
    const regB = new RegExp(/[\d]+ blue/g);

    var redtotal = [];
    var greentotal = [];
    var bluetotal = [];

    var i = 0;
    var j = 0;
    
    var MappedVals = new Map();

    for (i = 0; i < liIn.length; i++) {
        
        for (j = 0; j < liIn[i].length; j++) {

            if (liIn[i][j].match(regR) != null) {
                redtotal.push(Number(liIn[i][j].match(regR)[0].split(" ")[0]));
            }
            else {
                redtotal.push(0);
            }    

            if (liIn[i][j].match(regG) != null) {
                greentotal.push(Number(liIn[i][j].match(regG)[0].split(" ")[0]));
            }
            else {
                greentotal.push(0);
            }    

            if (liIn[i][j].match(regB) != null) {
                bluetotal.push(Number(liIn[i][j].match(regB)[0].split(" ")[0]));
            }
            else {
                bluetotal.push(0);
            }
        }
        MappedVals.set((i + 1), [redtotal, greentotal, bluetotal])

        redtotal = []
        greentotal = []
        bluetotal = []
    }

    return (MappedVals);
}

function lineSplit(lines2process) {
    const reg = new RegExp(/Game [\d]+: /g);
    var i = 0;
    var listOut = [];

    for (i = 0; i < lines2process.length; i++) {
        listOut.push(lines2process[i].split(reg)[1].split(";"));
    }

    return (listOut);
}

function validGameSum(kvp, r = 0, g = 0, b = 0) {
    var i = 0;

    var sum = 0;
    
    for (i = 0; i < kvp.size; i++) {
        console.log((i + 1) + " kvp: "+ kvp.get(i + 1));
        if (kvp.get((i + 1))[0] <= r &&
            kvp.get(i + 1)[1] <= g &&
            kvp.get(i + 1)[2] <= b) {
                console.log((i + 1) + " kvp: "+ kvp.get(i + 1));
                sum += Number(i + 1);
        }
    }
    return (sum);
}

function sumGames(kvp) {
    const red = 12;
    const green = 13;
    const blue = 14;

    var i = 1;
    var sum = 0;

    valid = true;
    for (i = 1; i < kvp.size + 1; i++) {

        for (j = 0; j < kvp.get(i)[0].length; j++) {
            if (kvp.get(i)[0][j] > red ||
                kvp.get(i)[1][j] > green ||
                kvp.get(i)[2][j] > blue) {
                    valid = false;
                    break;
            }            
        }

        if (valid == true) {
            sum += i;
        }

        valid = true
    }

    console.log(sum);
}

sumGames(captureRGB(lineSplit(lines)));
