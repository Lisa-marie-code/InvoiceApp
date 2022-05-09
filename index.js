
// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");
const plusButton = document.getElementById('#newButton');
const overlayField = document.getElementById('popup');
const itemButton = document.getElementById('#addNew');
const clearInput = document.getElementsByClassName('.input_group');


//darkmode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

//overlay
 const openNew = () => {
 overlayField.style.display = 'block';
};
//New list
function addList(){
  itemButton.innerHTML = 'new';
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

//discarding inputFields
function clearMyFields(){
  var clearInput = document.getElementsByClassName("input_group");
  for(var i= 0, c=clearInput.length; i<c; i++){
   clearInput[i].value = "";
  }
  console.log('Lee');
}




// json
let main_container = document.createElement('div');
main_container.className = 'mcontainer';
document.body.appendChild(main_container);


$(document).ready(function(){
  $.getJSON("data.json", function(data){
      $.each(data, function(index, value){ 
          console.log(value);
          
          let invoiceCard = document.createElement('div');
          invoiceCard.className = 'card';
          invoiceCard.id = 'tickect';
          // document.body.appendChild(invoiceCard);
          main_container.appendChild(invoiceCard);

          let code = document.createElement('div');
          code.className = 'idenNum';
          code.innerText = '#' +  value.id;
          invoiceCard.appendChild(code);

         let due = document.createElement('div');
         due.className = 'dueDate';
         due.innerText = 'Due' + '  ' +  value.paymentDue;
         invoiceCard.appendChild(due);

         let amount = document.createElement('div');
         amount.className = 'amt';
         amount.innerText = '£' + value.total;
         invoiceCard.appendChild(amount);

         let nameStatus = document.createElement('div');
         nameStatus.className = 'client';
         nameStatus.innerText = value.clientName;
         invoiceCard.appendChild(nameStatus);


         let pay = document.createElement('button');
         pay.className = 'payment';
         pay.innerText =  value.status;
         pay.style.color = value.hex;
         pay.style.backgroundColor = value.hexBG;
         invoiceCard.appendChild(pay);    

         
         let round = document.createElement('span');
         round.className = 'roundStatus';
         round.style.backgroundColor = value.hex;
         pay.appendChild(round);

         let arrow = document.createElement('div');
         arrow.className = 'arrowImage';
         arrow.innerHTML = `<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>`;
         invoiceCard.appendChild(arrow);
        
      });
      

      });
  });

