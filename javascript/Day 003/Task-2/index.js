const {
  calculateTolat,
  calculatePercentage,
  calculateGrade,
} = require("./module.js");


let total = calculateTolat(50, 60, 50);
console.log("Total Marks:", total);

let percentage = calculatePercentage(total);
console.log("percentage:",percentage.toFixed(2) + "%")

let grade = calculateGrade(percentage);
console.log("Grade:",grade)
