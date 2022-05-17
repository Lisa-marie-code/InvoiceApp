
// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");
const plusButton = document.getElementById('#newButton');
const overlayField = document.getElementById('popup');
const itemButton = document.getElementById('#addNew');
const newItem = document.getElementById('#boxItem');
const bin = document.getElementById('#delete');
const backInvoice = document.getElementById('#back');



//darkmode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

//overlay
 const openNew = () => {
 overlayField.style.display = 'block';
};

//back from invoice
const goBack = () =>{
  overlayField.style.display = 'none';
}

//New list
  function addList(){
    console.log('It works');
    let newInput = document.createElement('div');
    newInput.className = 'newInput';
    newInput.id = 'newlyInput';
    newInput.innerHTML = generateIt();
    document.getElementById('boxItem').appendChild(newInput);
   }

 function generateIt(){
   return `
   
   <div class="list">
   <input type="text" id="client" name="item" class="input_group"/>
  
  </div>
  <div class="list">
   <input type="text" id="client" name="quantity" class="input_group"/>
  
  </div>
  <div class="list">
   <input type="text" id="client" name="price" class="input_group"/>
   
  </div>
  <div class="list">
   <input type="text" id="client" name="total" class="input_group"/>
   
  </div>
  <div class="list">
   <img src="/starter-code/icon-delete.svg" id ="delete" alt="" onclick="removeItem()">
  </div>
   `
 }

//delete item
function removeItem(){
  document.getElementById('newlyInput').remove();

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
}


//saving as draft
// function makeDraft(){
//   document.addEventListener('DOMContentLoaded', function() {
//     // parse stored JSON if it exists otherwise an empty object 
//     var values = JSON.parse(localStorage.getItem('input_group') || '{}');
  
//     var inputs = document.querySelectorAll('input_group');
  
  
//     for (let i = 0; i < inputs.length; i++) {
//       var x = inputs[i];
//       x.value = values[i] || '';// stored value if it exists or empty string
  
//       x.onchange = function() {
//         // assign value to the object above
//         values[i] = this.value;
//         // store updated version of object
//         localStorage.setItem('inputs', JSON.stringify(values));
//       }
//     }
  
//   });
//   console.log('Jesus');
// }



function makeDraft(){
  let street = document.getElementById('street').value;
  let city = document.getElementById('city').value;
  let postcode = document.getElementById('postcode').value;
  let country = document.getElementById('country').value;
  let client = document.getElementById('client').value;
  let email = document.getElementById('email').value;
  let streetOne = document.getElementById('street1').value;
  let postcodeOne = document.getElementById('postcode1').value;
  let countryOne = document.getElementById('country1').value;
  let calendar = document.getElementById('invoiceDate').value;
  let days = document.getElementById('netdays').value;
  let project = document.getElementById('project').value;

  const allInputs ={
    street: street,
    city: city,
    postcode: postcode,
    country:country,
    client:client,
    email:email,
    streetOne:streetOne,
    postcodeOne:postcodeOne,
    countryOne:countryOne,
    calendar:calendar,
    days:days,
    project:project,

  }
  localStorage.setItem('allInputs',JSON.stringify(allInputs));
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
         nameStatus.className = 'clientname';
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

