'use strict';
const cardLS = JSON.parse(localStorage.getItem('cardData'));

function init() {
  if (cardLS) {
    data = cardLS;
    renderPreview(data);
  }
}

init();

//mostrar valores de input a preview
function renderPreview() {
  previewName.innerHTML = data.name === '' ? nameDefault : data.name;
  previewJob.innerHTML = data.job === '' ? jobDefault : data.job;
  previewMail.href = `mailto:${data.email}`;
  previewLinkedin.href = `http://linkedin.com/company/${data.linkedin}`;
  previewGithub.href =`http://github.com/${data.github}`;
     if (data.photo === '') {
       profileImage.style.backgroundImage =
         'url(./assets/images/preview-card-img.jpg)';
     } else {
       profileImage.style.backgroundImage = `url(${data.photo})`;
     }
  if (data.palette === '1') {
    previewCard.classList.add('palette1');
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette3');
    previewCard.classList.remove('palette4');
    previewCard.classList.remove('palette5');
    previewCard.classList.remove('palette6');
    radio1.checked = true;

  } else if (data.palette === '2') {
    previewCard.classList.add('palette2');
    previewCard.classList.remove('palette1');
    previewCard.classList.remove('palette3');
    previewCard.classList.remove('palette4');
    previewCard.classList.remove('palette5');
    previewCard.classList.remove('palette6');
     radio2.checked = true;
  } else if (data.palette === '3') {
    previewCard.classList.add('palette3');
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette1');
    previewCard.classList.remove('palette4');
    previewCard.classList.remove('palette5');
    previewCard.classList.remove('palette6');
    radio3.checked = true;
  } else if (data.palette === '4') {
    previewCard.classList.add('palette4');
    previewCard.classList.remove('palette1');
    previewCard.classList.remove('palette3');
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette5');
    previewCard.classList.remove('palette6');
    radio4.checked = true;
  } else if (data.palette === '5') {
    previewCard.classList.add('palette5');
    previewCard.classList.remove('palette1');
    previewCard.classList.remove('palette3');
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette4');
    previewCard.classList.remove('palette6');
    radio5.checked = true;
  } else if (data.palette === '6') {
    previewCard.classList.add('palette6');
    previewCard.classList.remove('palette1');
    previewCard.classList.remove('palette3');
    previewCard.classList.remove('palette2');
    previewCard.classList.remove('palette4');
    previewCard.classList.remove('palette5');
    radio6.checked = true;
  }
}

//recoger valores de input para renderizarlos
function handlerInputs(event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;
  data[idInput] = valueInput;
  renderPreview();
  localStorage.setItem('cardData', JSON.stringify(data));
}

//botón reset de preview
/*for/in - recorre las propiedades de un objeto. 
for/of - recorre los valores de un objeto iterable*/
function handleclickReset(event) {
  event.preventDefault();
  for (let property in data) {
    data[property] = '';
  }
  mailInput.value = '';
  phoneInput.value = '';
  jobInput.value = '';
  nameInput.value = '';
  linkedinInput.value = '';
  githubInput.value = '';
  profileImage.style.backgroundImage =
    'url(./assets/images/preview-card-img.jpg)';
  profilePreview.style.backgroundImage = '';
  renderPreview();
  remove();
  previewCard.classList.add('palette1');
  radio1.checked = true;
  localStorage.setItem('cardData','');
}


fill.addEventListener('keyup', handlerInputs);
btnReset.addEventListener('click', handleclickReset);
