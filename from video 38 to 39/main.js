let day1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day9 = "World";
// Output => "Its Not A Valid Day"
switch (day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9) {
  case "  friday  ":
    console.log(day1.trim().toUpperCase(0));
    break;

  case "Friday" && "Saturday" && "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday" && "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  case "World":
    console.log("Its Not A Valid Day");
    break;
}
