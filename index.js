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

      let group1 = document.createElement('div');
      group1.className = 'group1';
      statusDiv.appendChild(group1);
       
      let dtCode = document.createElement('div');
      dtCode.className = 'dtidenNum';
      dtCode.innerText = '#' +  value.id;
      dtCode.id = 'bold';
      group1.appendChild(dtCode);

      let dtdescript = document.createElement('div');
      dtdescript.className = 'dtidenNum';
      dtdescript.innerText = value.description;
      group1.appendChild(dtdescript);

      let group2 = document.createElement('div');
      group2.className = 'group2';
      group2.innerText = value.senderAddress.street;
      statusDiv.appendChild(group2);

      let dtstreet =document.createElement('div');
      dtstreet.className = 'dtstreetNum';
      group2.appendChild(dtstreet);

      let dtcity = document.createElement('div');
      dtcity.className = 'dtidenNum';
      dtcity.innerText = value.senderAddress.city;
      group2.appendChild(dtcity);

      let dtpostcode = document.createElement('div');
      dtpostcode.className = 'dtidenNum';
      dtpostcode.innerText = value.senderAddress.postCode;
      group2.appendChild(dtpostcode);

      let dtcountry = document.createElement('div');
      dtcountry.className = 'dtidenNum';
      dtcountry.innerText = value.senderAddress.country;
      group2.appendChild(dtcountry);

      
      const group5 = document.createElement('div');
      group5.className = 'group5';
      statusDiv.appendChild(group5);

      let group3 = document.createElement('div');
      group3.className = 'group3';
      group5.appendChild(group3);

      let invoiceDate = document.createElement('div');
      invoiceDate.innerText = 'Invoice Date';
      group3.appendChild(invoiceDate);

      let dtcreated = document.createElement('div');
      dtcreated.className = 'dtidenNum';
      dtcreated.id = 'bold';
      dtcreated.innerText = value.createdAt;
      group3.appendChild(dtcreated);

      let pDue = document.createElement('div');
      pDue.innerText = 'Payment Due';
      group3.appendChild(pDue);

      let dueDate = document.createElement('div');
      dueDate.className = 'dtidenNum';
      dueDate.id = 'bold';
      dueDate.innerText = value.paymentDue;
      group3.appendChild(dueDate);
      
      let group4 = document.createElement('div');
      group4.className = 'group4';
      group5.appendChild(group4);

      let billTo = document.createElement('div');
      billTo.className = 'dtbillTo';
      billTo.innerHTML = 'Bill To';
      group4.appendChild(billTo);

      let clientName = document.createElement('div');
      clientName.className = 'dtclientName';
      clientName.id = 'bold';
      clientName.innerHTML = value.clientName;
      group4.appendChild(clientName);

      let clientStreet = document.createElement('div');
      clientStreet.className = 'dtclientstreet';
      clientStreet.innerHTML = value.clientAddress.street;
      group4.appendChild(clientStreet);

      let clientCity = document.createElement('div');
      clientCity.className = 'dtclientstreet';
      clientCity.innerHTML = value.clientAddress.city;
      group4.appendChild(clientCity);

      let clientPost = document.createElement('div');
      clientPost.className = 'dtclientpost';
      clientPost.innerHTML = value.clientAddress.postCode;
      group4.appendChild(clientPost);

      let clientCountry = document.createElement('div');
      clientCountry.className = 'dtclientcountry';
      clientCountry.innerHTML = value.clientAddress.country;
      group4.appendChild(clientCountry);

      let sentTo = document.createElement('div');
      sentTo.className = 'dtclientemail';
      sentTo.innerText = 'Sent to';
      statusDiv.appendChild(sentTo);

      let clientEmail = document.createElement('div');
      clientEmail.className = 'dtclientemail';
      clientEmail.id = 'bold';
      clientEmail.innerText = value.clientEmail;
      statusDiv.appendChild(clientEmail);

      let itemGroup = document.createElement('div');
      itemGroup.className = 'dtitemgroup';
      statusDiv.appendChild(itemGroup);

      let items = document.createElement('div');
      items.className = 'dtitems';
      itemGroup.appendChild(items);

      let bdesign = document.createElement('div');
      bdesign.className = 'dtbdesign';
      bdesign.id = 'bold-two';
      bdesign.innerText = 'Banner Design';
      items.appendChild(bdesign);

      let calDesign = document.createElement('div');
      calDesign.className = 'dtcaldesign';
      // calDesign.innerText = value.items[3];
      bdesign.appendChild(calDesign);

      let gTotal = document.createElement('div')
      gTotal.className = 'gtotal';
      itemGroup.appendChild(gTotal);

      let grandTotal = document.createElement('div');
      grandTotal.className = 'grandtotal';
      grandTotal.innerText = 'Grand Total';
      gTotal.appendChild(grandTotal);

      let totalAmount = document.createElement('div');
      totalAmount. className = 'totalamount';
      totalAmount.innerText =  + value.total;
      gTotal.appendChild(totalAmount)


     });

     
      });
      
      });
  });


