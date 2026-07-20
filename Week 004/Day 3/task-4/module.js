function calculateYearlySalary(monthlySalary) {
  let yearlySalary = monthlySalary * 12;
  return yearlySalary;
}

function calculateBonus(monthlySalary) {
  let bonus = monthlySalary * 2;
  return bonus;
}

module.exports = {
  calculateYearlySalary,
  calculateBonus,
};