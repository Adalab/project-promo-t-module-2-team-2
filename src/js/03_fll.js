'use strict';



//variables
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewMail = document.querySelector('.js_mail');
const previewLinkedin = document.querySelector('.js_linkedin');
const previewGithub = document.querySelector('.js_github');
const fill = document.querySelector('.js_fill');
const nameInput = document.querySelector('.js-name');
const jobInput = document.querySelector('.js-job');
const mailInput = document.querySelector('.js-mail');
const phoneInput = document.querySelector('.js-phone');
const linkedinInput = document.querySelector('.js-linkedin');
const githubInput = document.querySelector('.js-github');
const photoInput = document.querySelector('.js-photo');


const nameDefault = previewName.textContent;
const jobDefault = previewJob.textContent;


const data = {
  palette: '',
  name: previewName.textContent,
  job: previewJob.textContent,
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};


//funciones
function renderPreview (){
  previewName.innerHTML = nameInput.value === '' ? nameDefault : data.name;
  previewJob.innerHTML = jobInput.value === '' ? jobDefault : data.job;
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

const btnReset = document.querySelector('.js_btnreset');

function handleclickReset(event) {
  event.preventDefault();
  console.log(data);

  data.name ='';
  data.palette ='';
  data.job ='';
  data.phone ='';
  data.email ='';
  data.linkedin ='';
  data.github ='';
  data.photo ='';
  mailInput.value = '';
  phoneInput.value = '';
  jobInput.value = '';
  photoInput.value = '';
  nameInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  renderPreview();

}


btnReset.addEventListener('click', handleclickReset);

fill.addEventListener('keyup',handlerInputs);

