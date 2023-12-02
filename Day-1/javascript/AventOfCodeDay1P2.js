/**
 * @Author: Rezvee Rahman
 * @Date: 12/01/2023
 * 
 */


/* A sketchy tutorial man told me to do this 
 * https://www.youtube.com/watch?v=XFRQHhKTutI
 */
var fs = require('fs');
var calibrationValues = [];
var pattern = new RegExp(/[\d]/g); 
const words2Int = { 
    "zero" : "0",
    "one" : "1",
    "two" : "2",
    "three" : "3",
    "four" : "4",
    "five" : "5",
    "six" : "6",
    "seven" : "7",
    "eight" : "8",
    "nine" : "9"
};

var summed;

console.log("Starting Solution to avent of Code (Day 1)");

var lines = fs.readFileSync("AOCD12023.txt").toString().split("\n")
var extractedDigits = [];
var retreivedDigits;
var currentLine;
for (i = 0; i < lines.length; i++) {
    currentLine = lines[i]
   
    // Replace All doesn't exist????
    // for (const [ word, numeric] of Object.entries(words2Int)) {
    //     currentLine = currentLine.replaceAll(word, numeric);
    // }

    // currentLine = currentLine.replace(/[\d]/g, "")
    // currentLine = currentLine.replace(/zero/g, "0")

    currentLine = currentLine.replace(/oneight/g, "oneeight");
    currentLine = currentLine.replace(/threeight/g, "threeeight");
    currentLine = currentLine.replace(/fiveight/g, "fiveeight");
    currentLine = currentLine.replace(/nineight/g, "nineeight");
    currentLine = currentLine.replace(/twone/g, "twoone");
    currentLine = currentLine.replace(/sevenine/g, "sevennine");
    currentLine = currentLine.replace(/eightwo/g, "eighttwo");
    currentLine = currentLine.replace(/eighthree/g, "eightthree");

    currentLine = currentLine.replace(/one/g, "1");
    currentLine = currentLine.replace(/two/g, "2");
    currentLine = currentLine.replace(/three/g, "3");
    currentLine = currentLine.replace(/four/g, "4");
    currentLine = currentLine.replace(/five/g, "5");
    currentLine = currentLine.replace(/six/g, "6");
    currentLine = currentLine.replace(/seven/g, "7");
    currentLine = currentLine.replace(/eight/g, "8");
    currentLine = currentLine.replace(/nine/g, "9");
    
    if(pattern.test(currentLine)) {
        console.log((i+1) + " : " + currentLine);
        retreivedDigits = currentLine.match(pattern);
        console.log(retreivedDigits + " " + retreivedDigits[0] + retreivedDigits[retreivedDigits.length - 1])
        extractedDigits.push( parseInt(retreivedDigits[0] + retreivedDigits[retreivedDigits.length - 1]) );
    }
}
// console.log(extractedDigits);

/* This Reminds me of Haskell ~ Rezvee */
summed = extractedDigits.reduce( (partialSum, a) => partialSum + a, 0);
console.log(summed);
return summed;

// datum = fs.readFileSync("AOCD12023.txt").toString().split("\n");
// datum2 = "Test23Dummy69idiot";
// datum3 = "aaaa2aaaa"

// var newDat = datum3.match(pattern);
// var firstDat = newDat[0];
// var lastDat = newDat[newDat.length - 1];   

// console.log(parseInt(firstDat + lastDat));


/**
 * From my newbie JavaScript understanding I'm reading the file
 * line by line. 
 * 
 * -> Problem requires me to read each line,
 * take the first digit in the line, add it to the last 
 * digit that appears in that same line
 * 
 * i.e. acm4bm23alttopol2lmfaoomg
 *      42 
 * 
 * I will use RegEx because a guy named Jerome told me to do so.
 * Big Jerome is watching... 
 * 
 */



