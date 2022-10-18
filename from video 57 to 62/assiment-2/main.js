function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined) {
    console.log(`Second Number Not Found`);
  }
  if (operation == undefined) {
    console.log(firstNum + secondNum);
  }
  if (operation == "add") {
    console.log(firstNum + secondNum);
  }
  if (operation == "subtract") {
    console.log(firstNum - secondNum);
  }
  if (operation == "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(100); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
