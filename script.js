var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");

color1.addEventListener("input", changeLinearColor);
color2.addEventListener("input", changeLinearColor);

function changeLinearColor() {
  body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
  css.textContent = body.style.background + ";";
}

