'use strict';

//variables
const inputName = document.querySelector ('.js-name');
const previewName = document.querySelector ('.js-preview-name');
const inputJob = document.querySelector ('.js-job');
const previewJob = document.querySelector ('.js-preview-job');
const inputMail = document.querySelector ('.js-mail');
const previewMail = document.querySelector ('.js_mail');
const inputLinkedin = document.querySelector ('.js-linkedin');
const previewLinkedin = document.querySelector ('.js_linkedin');
const inputGithub = document.querySelector ('.js-github');
const previewGithub = document.querySelector ('.js_github');


//funciones
function handlerInputName (event){
  const inputValue = event.target.value;
  previewName.innerHTML = inputValue;
}

function handlerInputJob (event){
  const inputValue = event.target.value;
  previewJob.innerHTML = inputValue;
}

function handlerInputMail (event) {
  const inputValue = event.target.value;
  previewMail.href = inputValue; 
}

function handlerInputLinkedin (event) {
  const inputValue = event.target.value;
  previewLinkedin.href = inputValue; 
}

function handlerInputGithub (event) {
  const inputValue = event.target.value;
  previewGithub.href = inputValue; 
}

//eventos
inputName.addEventListener('input', handlerInputName);
inputJob.addEventListener('input', handlerInputJob);
inputMail.addEventListener('input', handlerInputMail);
inputLinkedin.addEventListener('input', handlerInputLinkedin);
inputGithub.addEventListener('input', handlerInputGithub);