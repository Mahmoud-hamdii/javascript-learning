let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arry = myArray
  .flatMap(function (el) {
    return el;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

// Elzero
console.log(arry);
