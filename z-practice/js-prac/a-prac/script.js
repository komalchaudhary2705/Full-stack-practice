
// console.log("working")
// ========================================================
document.write("<h1>Helo I am heading1 from js</h1>");
let heading1 = document.getElementsByTagName('h1');
console.log(heading1);
// ========================================================

const heading2 = document.createElement("h2");
const parent = document.getElementById("root");
parent.append(heading2);
heading2.innerText = "hi i am heading come from js"
heading2.style.background = "red"
heading2.style.background = "red"

console.log(heading2)
// ========================================================
