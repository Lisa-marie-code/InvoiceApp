
const client = document.querySelector('#client');
const clearInput = document.getElementsByClassName('.input_group');
const submit = document.getElementById('#send');
const perror = document.querySelector('p')

submit.addEventListener('click',(e)=>{
e.preventDefault();

if(client.value.trim() === ''){
    perror.style.border = '2px solid red';
    perror.style.visibility = 'visible';
  }else{
      console.log('Success');
  }

});

    // function error(element,msg){
    //     element.style.border = '3px solid red';
    //     const parent = element.parentElement;
    //     const p = parent.querySelector('p');
    //     p.textContent = msg;
    //     p.style.visibility = 'visible';
    // }