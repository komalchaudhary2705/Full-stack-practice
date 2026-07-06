const arr1 = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  //   document.write(`${arr1[i]} <br/>`);
  sum += arr1[i];
}

document.write(`Sum of array values are : ${sum}`);

// =============================
document.write("<br>");
document.write("<br>");
// =============================

const arr2 = ["Ali", "Ahmed", "Sara", "Fatima"];
let value = "Sara";

let found = false;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === value) {
    document.write(`${arr2[i]} found at index: ${i} <br>`);
    found = true;
    break;
  }
}

if (!found) {
  document.write(`${value} not found`);
}