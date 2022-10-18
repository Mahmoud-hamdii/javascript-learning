let boos = document.images;
for (let i = 0; i < boos.length; i++) {
  if (boos[i].alt === "") {
    boos[i].alt = "Elzero New";
  } else {
    boos[i].alt = "old";
  }
}
