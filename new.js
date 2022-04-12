
const overlayField = document.getElementById('popup');


 const openNew = () => {
  overlayField.style.display = 'block';
};

let create_Container = document.createElement('div');
create_Container.className = 'new_main';
overlayField.appendChild(create_Container);

let newHeader = document.createElement('h3');
newHeader.className = 'new_Header';
newHeader.innerHTML = 'New Invoice';
create_Container.appendChild(newHeader);

let formHolder = document.createElement("div");
formHolder.className = 'hold_form';
create_Container.appendChild(formHolder);

let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");
    formHolder.appendChild(form);

    let Staddress = document.createElement("input");
    Staddress.setAttribute("type", "text");
    Staddress.setAttribute("name", "Street Address");
    Staddress.className = 'StreetAddress';
    formHolder.appendChild(Staddress);

    let newlabel = document.createElement("Label");
    newlabel.setAttribute("for",'StreetAddress');
    newlabel.innerHTML = "Street Address";
    formHolder.appendChild(newlabel);

   
