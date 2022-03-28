// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");

function toggleTheme() {
  document.body.classList.toggle("dark");

}
colorTheme.addEventListener("click", toggleTheme);

//filtering bar
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}