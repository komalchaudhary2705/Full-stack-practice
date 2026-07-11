const { calculateYearlySalary, calculateBonus } = require("./module.js");

let monthlySalary = 50000;

let yearlySalary = calculateYearlySalary(monthlySalary);
let bonus = calculateBonus(monthlySalary);

console.log(`Monthly Salary: ${monthlySalary}`);
console.log(`Yearly Salary: ${yearlySalary}`);
console.log(`Bonus Amount: ${bonus}`);