const { findSum, findMinimum, findMaximun } = require("./module.js");

const array = [10, 20, 30];

let sum = findSum(array);
console.log(`Sum of array value is : ${sum}`);

let maxNum = findMaximun(array);
console.log(`Maximun Number is : ${maxNum}`);

let minNum = findMinimum(array);
console.log(`Maximun Number is : ${minNum}`);
