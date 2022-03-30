// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");


function toggleTheme() {
  document.body.classList.toggle("dark");
  moon_mode.style.display = 'none';

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