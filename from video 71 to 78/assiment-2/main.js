let myString = "EElllzzzzzzzeroo";
let string = myString
  .split("")
  .filter(function (value, index, self) {
    return self.indexOf(value) === index;
  })
  .join("");

console.log(string);

// Elzero
