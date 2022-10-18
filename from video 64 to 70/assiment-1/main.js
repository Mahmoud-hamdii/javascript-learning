function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    zName = zName.split(" ");
    return zName[0] + " " + zName[1][0].toUpperCase() + ".";
  }
  function ageWithMessage(zAge) {
    return "Your Age Is " + zAge[0] + zAge[1];
  }
  function countryTwoLetters(zCountry) {
    return zCountry[0] + zCountry[1];
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Mahmoud hamdy", "23 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
