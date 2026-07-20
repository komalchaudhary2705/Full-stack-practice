

function calculateTolat(mark1, mark2, mark3) {
  // console.log(`Total marks : ${mark1 + mark2 + mark3}`);
  let totalMarks = mark1 + mark2 + mark3;
  return totalMarks;
}

function calculatePercentage(totalMarks) {
  // console.log(`percentage : ${totalMarks/300}*100`);
  const percentage = (totalMarks/300)*100;
  return percentage;
}

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 50) {
    return "D";
  } else {
    return "Fail";
  }
}

module.exports = {
  calculateTolat,
  calculatePercentage,
  calculateGrade,
};
