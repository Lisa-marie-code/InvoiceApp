// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");

function toggleTheme() {
  document.body.classList.toggle("dark");
}
colorTheme.addEventListener("click", toggleTheme);


