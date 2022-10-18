let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, currunt) {
  return currunt % 2 === 0 ? acc * currunt : acc + currunt;
}, 1);

console.log(result);

// 500
