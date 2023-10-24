// connect JS to the html DOM and add event listener
const button = document.querySelector(".button");
const resultButton = document.querySelector(".resultButton");
button.addEventListener("click", (e) => {
  document.getElementByID("A").src =
    "../images/css-letter-a.png".style.display = "flex";
});
resultButton.addEventListener("click", (e) => {
  document.getElementByID("resultA").src =
    "../images/css-letter-a.png".style.display = "none";
});
