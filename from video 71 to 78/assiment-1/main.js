let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mazbot = mix
  .map(function (ele) {
    return typeof ele === "number" ? "" : ele;
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(mazbot);

// Elzero
