
let marks = -1;

if (marks <= 100 && marks > 95) {
  document.write(`Your marks are: ${marks} and your Grade is A`);
} else if (marks <= 95 && marks > 90) {
  document.write(`Your marks are: ${marks} and your Grade is A+`);
} else if (marks <= 90 && marks > 85) {
  document.write(`Your marks are: ${marks} and your Grade is B`);
} else if (marks <= 85 && marks > 70) {
  document.write(`Your marks are: ${marks} and your Grade is B+`);
} else if (marks <= 70 && marks > 60) {
  document.write(`Your marks are: ${marks} and your Grade is C`);
} else if (marks <= 60 && marks > 50) {
  document.write(`Your marks are: ${marks} and your Grade is D`);
} else if (marks <= 50 && marks > 40) {
  document.write(`Your marks are: ${marks} and your Grade is E`);
} else if (marks <= 40 && marks >= 0) {
  document.write(`Your marks are: ${marks} and your Grade is F`);
} else {
  document.write(`You entered invalid marks`);
}
