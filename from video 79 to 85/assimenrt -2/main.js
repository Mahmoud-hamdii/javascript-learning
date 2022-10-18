// Method One
let objMethodOne = { property: "Method One" };

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTow = {};
objMethodTow.property = "Method Tow";

console.log(objMethodTow.property); // "Method Two"

// Method Three
let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"
