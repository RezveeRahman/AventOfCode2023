/**
 * @Author: Rezvee Rahman
 * @Date: 12/01/2023
 * 
 * Avent of code solution in NodeJS?
 * I absolutely don't understand this language
 */


/* A sketchy tutorial man told me to do this 
 * https://www.youtube.com/watch?v=XFRQHhKTutI
 */
var fs = require('fs');
var calibrationValues = [];
var pattern = new RegExp(/[\d].*?/g); /* <- ULTRA BASED REGEX */
var summed;

console.log("Starting Solution to avent of Code (Day 1)");

var lines = fs.readFileSync("AOCD12023.txt").toString().split("\n")
var extractedDigits = [];
var retreivedDigits;
for (i = 0; i < lines.length; i++) {
    if(pattern.test(lines[i])) {
        retreivedDigits = lines[i].match(pattern);
        extractedDigits.push( parseInt(retreivedDigits[0] + retreivedDigits[retreivedDigits.length - 1]) );
    }
}
console.log(extractedDigits);

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



