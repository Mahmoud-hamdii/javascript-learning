let result = document.querySelector(".result");

document.getElementById("dollar").onkeyup = function () {
  let number = document.getElementById("dollar").value;
  result.innerHTML = `{${number}} USD Dollar = {${
    number * 19.76
  }} Egyptian Pound`;
};
