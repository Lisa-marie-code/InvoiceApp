
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