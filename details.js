const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");
const plusButton = document.getElementById('#newButton');
const overlayField = document.getElementById('popup');
const itemButton = document.getElementById('#addNew');
const barDiv = document.querySelector('new_bar');



function toggleTheme() {
  document.body.classList.toggle("dark");
}

const openNew = () => {
  overlayField.style.display = 'block';
};

function added() {
  itemButton.style.backgroundColor = 'red';
}

// const added = () => {
// itemButton.style.backgroundColor = 'red';
// }



let statusDivContainer = document.createElement('div');
statusDivContainer.className = 'st-div';
// statusDivContainer.innerText = 'Status';
document.body.appendChild(statusDivContainer);




let statusDiv = document.createElement('div');
statusDiv.className = 'status-div';
statusDiv.style.backgroundColor = 'white';

document.body.appendChild(statusDiv);


$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    $.each(data, function (index, value) {
      console.log(value);

     





    });

    
    
  });
});

export {
  statusDivContainer, statusDiv
};