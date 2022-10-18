document.querySelector(".one").title = document.querySelector(".two").title;
document.querySelector(".one").innerText =
  document.querySelector(".two").innerText;
document.querySelector(".two").title = document.querySelector(".two").className;
document.querySelector(".two").innerText =
  document.querySelector(".two").className +
  document.querySelector(".one").attributes.length;
