'use strict';



//variables
const previewName = document.querySelector ('.js-preview-name');
const previewJob = document.querySelector ('.js-preview-job');
const previewMail = document.querySelector ('.js_mail');
const previewLinkedin = document.querySelector ('.js_linkedin');
const previewGithub = document.querySelector ('.js_github');
const fill = document.querySelector ('.js_fill');

const data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};


//funciones
function renderPreview (){
  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
  previewMail.href = `mailto:${data.email}`;
  previewLinkedin.href = `http://linkedin.com/company/${data.linkedin}`;
  previewGithub.href = `http://github.com/${data.github}`;

}
function handlerInputs (event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;
  data[idInput] = valueInput;
  renderPreview();
}
/*function handlerInputName (event){
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
*/
fill.addEventListener('keyup',handlerInputs);