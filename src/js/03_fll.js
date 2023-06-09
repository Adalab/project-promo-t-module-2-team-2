'use strict';
let data = {
  palette: '1',
  name: previewName.textContent,
  job: previewJob.textContent,
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

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
/*for/in - recorre las propiedades de un objeto. 
for/of - recorre los valores de un objeto iterable*/
function handleclickReset(event) {
  debugger;
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
    'url(../assets/images/preview-card-img.jpg)';
  profilePreview.style.backgroundImage = '';
  renderPreview();
  remove();
  previewCard.classList.add('palette1');
  radio1.checked = true;
}


fill.addEventListener('keyup', handlerInputs);
btnReset.addEventListener('click', handleclickReset);
