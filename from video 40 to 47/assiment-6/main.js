let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().reverse();
allArrs.length = 3;
allArrs = allArrs.reverse().join("").toLowerCase();

console.log(allArrs); // fxy
