let number = document.getElementsByClassName("input")[0].value;
let text = document.getElementsByClassName("input")[1].value;
let option = document.getElementsByClassName("input")[2].value;

document
  .getElementsByTagName("input")[2]
  .addEventListener("click", function (e) {
    for (let i = 0; i < number; i++) {
      console.log(option);
    }
  });
