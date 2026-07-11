console.log("======================");

// for (let i = 1; i <= 5; i++) {
//   // console.log(i)
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// =====================
// console.log("======================");

// for (let i = 5; i >= 1; i--) {
//   //   console.log(i);
//   let star = "";
//   for (let j = i; j >= 1; j--) {
//     star += "*";
//   }
//   console.log(star);
// }

console.log("======================");

//    *
//   **
//  ***
// ****
//*****
for (let i = 1; i <= 5; i++) {
  //   // console.log(i)
  let star = "";
  let space = " ";
  //   for space
  for (let k = 4; k >= i; k--) {
    // console.log(k);
    space += " ";
  }
  // for stars
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(`${space} ${star}`);
}
console.log("======================");


