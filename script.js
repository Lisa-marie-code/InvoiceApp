
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
            
           

            
            
                
               
        });


        });
    });

