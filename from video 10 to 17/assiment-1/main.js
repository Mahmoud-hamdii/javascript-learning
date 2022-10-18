// Add Variables Here
let number1 = "10";
let number2 = "20";
// Ouput
console.log(number1 + number2); // Normal Concatenate => 1020
console.log(typeof "number1 + number2"); // Normal Concatenate => String
console.log(`${number1}${number2}`); // Template Literals Way => 1020
console.log(typeof `${number1} ${number2}`); // Template Literals Way => String

console.log(number1 + "\n" + number2);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${number1}
${number2}`);
/*
  Template Literals Way
  20
  10
*/
