document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".red").onclick = red;
  document.querySelector(".blue").onclick = blue;
  document.querySelector(".green").onclick = green;
  document.querySelector(".orange").onclick = orange;

});

function red() {
  document.querySelector("h1").style.color = "red";
};
function blue() {
  document.querySelector("h1").style.color = "blue";
};

function green() {
  document.querySelector("h1").style.color = "limegreen";
};

function orange() {
  document.querySelector("h1").style.color = "orange";
};
