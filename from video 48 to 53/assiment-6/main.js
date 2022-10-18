let start = 0;
let swappedName = "elZerO";
let swap = [];
for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swap += swappedName[i].toLowerCase();
  } else {
    swap += swappedName[i].toUpperCase();
  }
}
console.log(swap);
// Output
("ELzERo");
