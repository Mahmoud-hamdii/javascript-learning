function checkStatus(a, b, c) {
  let x = [a, b, c];
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      a = x[i];
    }
    if (typeof x[i] === "number") {
      b = x[i];
    }
    if (typeof x[i] === "boolean") {
      c = x[i];
    }
  }
  if (c === true) {
    c = "Are Available For Hire";
  } else {
    c = "Are Not Available For Hire";
  }
  console.log(`Hello ${a}, Your Age Is ${b}, You ${c}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
