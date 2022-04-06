
// changing body theme to dark
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
         pay.appendChild(round);

        
      });
      

      });
  });

