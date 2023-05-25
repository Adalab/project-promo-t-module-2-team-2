'use strict';

//variables
const inputName = document.querySelector ('.js-name');
const previewName = document.querySelector ('.js-preview-name');
const inputJob = document.querySelector ('.js-job');
const previewJob = document.querySelector ('.js-preview-job');


//funciones
function handlerInputName (event){
  const inputValue = event.target.value;
  previewName.innerHTML = inputValue;
}

function handlerInputJob (event){
  const inputValue = event.target.value;
  previewJob.innerHTML = inputValue;
}


//eventos
inputName.addEventListener('input', handlerInputName);
inputJob.addEventListener('input', handlerInputJob);