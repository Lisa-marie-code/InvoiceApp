
$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function(index, value){ 
            console.log(value);
            
            let invoiceCard = document.createElement('div');
            invoiceCard.className = 'card';
            invoiceCard.id = 'tickect';
            document.body.appendChild(invoiceCard);

            let code = document.createElement('div');
            code.className = 'idenNum';
            code.innerText = value.id;
            invoiceCard.appendChild(code);

           let due = document.createElement('div');
           due.className = 'dueDate';
           due.innerText = value.paymentDue;
           invoiceCard.appendChild(due);

           let amount = document.createElement('div');
           amount.className = 'amt';
           amount.innerText = value.total;
           invoiceCard.appendChild(amount);

        //    let name = document.createElement('div');
        //    name.id = 'buttonOne';
        //    invoiceCard.appendChild(name);

           let nameStatus = document.createElement('div');
           nameStatus.className = 'client';
           nameStatus.innerText = value.clientName;
           invoiceCard.appendChild(nameStatus);

           let pay = document.createElement('button');
           pay.className = 'payment';
           pay.innerText = value.status;
           invoiceCard.appendChild(pay);


            
            
                
               
        });


        });
    });

