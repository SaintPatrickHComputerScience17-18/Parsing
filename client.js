const FileReader = require('./FileReader.js');

let FR = new FileReader();

let rawdata = FR.loadFileIntoString('electionSimplified.csv')
console.log(rawdata.split("\r\n"));
console.log("----------");

let list = FR.LoadFileIntoArrayByLine('electionSimplified.txt');


console.log(list[0]);
console.log(list[500]);
console.log(list[1000]);
console.log(list[2000]);
