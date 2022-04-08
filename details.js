
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");


function toggleTheme() {
  document.body.classList.toggle("dark");
  
}


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


let statusDivContainer = document.createElement('div');
    statusDivContainer.className = 'st-div';
    document.body.appendChild(statusDivContainer);


  $(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function(index, value){ 
            console.log(value);

             let statusDiv = document.createElement('div');
                statusDiv.className = 'status-div';
                statusDivContainer.appendChild(statusDiv);

            
        //     let invoiceCard = document.createElement('div');
        //     invoiceCard.className = 'card';
        //     invoiceCard.id = 'tickect';
        //     // document.body.appendChild(invoiceCard);
        //     main_container.appendChild(invoiceCard);
      
        });
  
  
        });
    });
  
//   export { statusDivContainer};