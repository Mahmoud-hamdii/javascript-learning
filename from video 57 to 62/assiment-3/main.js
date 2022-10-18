function ageInTime(theAge) {
  if (theAge > 100) {
    console.log(`the age is out of range`);
  }
  if (theAge < 100) {
    console.log(
      `(${theAge * 12} Months) \n (${theAge * 365} days) \n (${
        theAge * 8760
      } Hours) \n (${theAge * 525600} minuts) \n (${theAge * 35136000} second)`
    );
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(50); // Months Example => 456 Months
