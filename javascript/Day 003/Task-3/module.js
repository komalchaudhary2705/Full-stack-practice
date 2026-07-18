function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // console.log(sum)
  return sum;
}

function findMaximun(array) {
  let max = array.reduce((a, b) => {
    return a > b ? a : b;
  });

  return max;
}

function findMinimum(array) {
  let min = array.reduce((a, b) => {
    return a < b ? a : b;
  });
  return min
}

module.exports = {
  findSum,
  findMinimum,
  findMaximun,
};
