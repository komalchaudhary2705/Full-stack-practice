const arr1 = ["Ali", "Ahmed", "Sara", "Fatima"];

// document.write(arr1)

let name = "Sara";
let found = false;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === name) {
    document.write(`${arr1[i]} is found at index ${i}`);
    found = true;
    break;
  } else {
    document.write(`element not found`);
    found = false;
    break;
  }
}
