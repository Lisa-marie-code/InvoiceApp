import {statusDivContainer, statusDiv} from './details.js';

// changing body theme to dark
const body = document.querySelector("body");
const colorTheme = document.getElementById("#color_mode");
const moon_mode = document.getElementById("#moon");
const plusButton = document.getElementById('#newButton');
const overlayField = document.getElementById('popup');
const itemButton = document.getElementById('#addNew');




function toggleTheme() {
  document.body.classList.toggle("dark");
}

 const openNew = () => {
 overlayField.style.display = 'block';
};

function added(){
  itemButton.style.backgroundColor = 'red';
}

// const added = () => {
// itemButton.style.backgroundColor = 'red';
// }

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
          invoiceCard.id = 'ticket';
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
        
         let oneInvoice = invoiceCard;
      oneInvoice.addEventListener('click',()=> {
      main_container.innerHTML = statusDivContainer.innerHTML ; 
      const barDiv = document.querySelector('.new_bar').style.visibility = 'hidden';
      const status = document.querySelector('.st-div').style.visibility ='visible';
      const returnArrow =document.querySelector('.r-arrow').style.visibility = 'visible';
      const sDetail = document.querySelector('.status-div').style.visibility = 'visible'; 


      let stat = document.createElement('div');
      stat.className = 'statuses';
      stat.innerText = value.status;
      stat.style.backgroundColor = value.hexBG;
      stat.style.color = value.hex;
    
      statusDivContainer.appendChild(stat);
       
      let dtCode = document.createElement('div');
      dtCode.className = 'dtidenNum';
      dtCode.innerText = '#' +  value.id;
      statusDiv.appendChild(dtCode);

      let dtdescript = document.createElement('div');
      dtdescript.className = 'dtidenNum';
      dtdescript.innerText = value.description;
      statusDiv.appendChild(dtdescript);

      let dtcity = document.createElement('div');
      dtcity.className = 'dtidenNum';
      dtcity.innerText = value.senderAddress.city;
      statusDiv.appendChild(dtcity);

      let dtpostcode = document.createElement('div');
      dtpostcode.className = 'dtidenNum';
      dtpostcode.innerText = value.senderAddress.postCode;
      statusDiv.appendChild(dtpostcode);

      let dtcountry = document.createElement('div');
      dtcountry.className = 'dtidenNum';
      dtcountry.innerText = value.senderAddress.country;
      statusDiv.appendChild(dtcountry);

      let dtcreated = document.createElement('div');
      dtcreated.className = 'dtidenNum';
      dtcreated.innerText = value.createdAt;
      statusDiv.appendChild(dtcreated);
      
      

     });

     
      });
      
      });
  });


