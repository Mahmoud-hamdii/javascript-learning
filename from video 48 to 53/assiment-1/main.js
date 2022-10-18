let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i < end + start; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
