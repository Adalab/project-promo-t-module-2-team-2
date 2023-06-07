'use strict';
//import { clicked } from "./js/02_design.js";

//variables
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const previewCard = document.querySelector('.js_preview-card');

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
// const photoInput = document.querySelector('.js-photo');

const nameDefault = previewName.textContent;
const jobDefault = previewJob.textContent;

const btnReset = document.querySelector('.js_btnreset');

const createBtn = document.querySelector('.botom-share');
const linkUrl = document.querySelector('.url');
const msjError = document.querySelector('.error');

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

const data = {
  palette: '' ,
  name: previewName.textContent,
  job: previewJob.textContent,
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

//funciones
//02_design.js------------------------------------------------
//borrar clases paleta de colores html.
function remove() {
  if (previewCard.classList.contains('palette1')) {
    previewCard.classList.remove('palette1');
    radio1.checked = false;
  } else if (previewCard.classList.contains('palette2')) {
    previewCard.classList.remove('palette2');
    radio2.checked = false;
  } else if (previewCard.classList.contains('palette3')) {
    previewCard.classList.remove('palette3');
    radio3.checked = false;
  }
}
// añadir al preview palette seleccionada y guardado en data 
function clickRadio1() {
  remove();
  previewCard.classList.add('palette1');
  data.palette = '1';
}
function clickRadio2() {
  remove();
  previewCard.classList.add('palette2');
  data.palette = '2';
}
function clickRadio3() {
  remove();
  previewCard.classList.add('palette3');
  data.palette = '3';
}

//03_fill.js ------------------------------------------
//mostrar valores de input a preview
function renderPreview() {

  previewName.innerHTML = nameInput.value === '' ? nameDefault : data.name;
  previewJob.innerHTML = jobInput.value === '' ? jobDefault : data.job;
  previewMail.href = `mailto:${data.email}`;
  previewLinkedin.href = `http://linkedin.com/company/${data.linkedin}`;
  previewGithub.href = `http://github.com/${data.github}`;
}

//recoger valores de input para renderizarlos
function handlerInputs(event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;
  data[idInput] = valueInput;
  renderPreview();
}

//botón reset de preview

function handleclickReset(event) {
  debugger;
  event.preventDefault();
  data.name = '';
  data.palette = '';
  data.job = '';
  data.phone = '';
  data.email = '';
  data.linkedin = '';
  data.github = '';
  mailInput.value = '';
  phoneInput.value = '';
  jobInput.value = '';
  nameInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  profileImage.style.backgroundImage = 'url(/assets/images/preview-card-img.jpg)';
  profilePreview.style.backgroundImage = '';
  renderPreview();
  remove();
  previewCard.classList.add('palette1');
  radio1.checked = true;
}

//05_share.js------------------------------------------
//botón crear targeta
function handleClickCreate(event) {
 
  event.preventDefault();
  let allFieldComplete = true;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === '') {
      msjError.innerHTML += `Rellena el campo ${data[i]}`;
      allFieldComplete = false;
    }
  }
  if (allFieldComplete === true) {
    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        debugger;
        console.log(datos)
        if (datos.success) {
          linkUrl.innerHTML = datos.cardURL;
          linkUrl.href = datos.cardURL;
        } else {
          msjError.innerHTML =
            'Las tres lunas de marte no están alineadas, intentelo de nuevo';
        }
      })
      .catch((err) => console.log('error', err));
  }
}


radio1.addEventListener('click', clickRadio1);
radio2.addEventListener('click', clickRadio2);
radio3.addEventListener('click', clickRadio3);
fill.addEventListener('keyup', handlerInputs);
btnReset.addEventListener('click', handleclickReset);
createBtn.addEventListener('click', handleClickCreate);


//04_image.js - botón añadir imagen y guardarla en data.

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

fileField.addEventListener('change', getImage);

