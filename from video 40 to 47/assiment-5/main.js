let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.includes(needle) ? console.log("found") : console.log("not found");
haystack.lastIndexOf(needle) == 1
  ? console.log("found")
  : console.log("not found");
haystack.indexOf(needle) === 1
  ? console.log("found")
  : console.log("not found");
