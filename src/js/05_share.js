<<<<<<< HEAD
'use strict';
//botón crear targeta
=======
//botón crear tarjeta

>>>>>>> 69d9706a364b226ddd8db6da849a7b246d47b524
function handleClickCreate(event) {
    msjError.innerHTML=''
  event.preventDefault();
  let allFieldComplete = true;
<<<<<<< HEAD
  debugger;

  if (data.palette === '') {
    msjError.innerHTML += `Elige algún color de la sección diseña </br>`;
    allFieldComplete = false;
  }
  for (let input in inputsValues) {
    if (inputsValues[input].value === '') {
      msjError.innerHTML += `Rellena el campo ${inputsValues[input].name} </br>`;
=======
  for (let property in data) {
    if (data[property] === '') {
      msjError.innerHTML += `Rellena el campo ${property} </br>`;
>>>>>>> 69d9706a364b226ddd8db6da849a7b246d47b524
      allFieldComplete = false;
    }
  }
  
  if (allFieldComplete === true) {
    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'content-type': 'application/json',},
    })
      .then((response) => response.json())
<<<<<<< HEAD
      .then((datos) => {
        if (datos.success) {
          linkUrl.innerHTML = `<a href="${datos.cardURL}">${datos.cardURL}</a>`;
=======
      .then((data) => {
        if (data.success) {
          linkUrl.innerHTML = data.cardURL;
          linkUrl.href = data.cardURL;
          success.classList.remove('collapsed');
          twitter.classList.remove('collapsed');
          msjError.innerHTML = "";
>>>>>>> 69d9706a364b226ddd8db6da849a7b246d47b524
        } else {
          msjError.innerHTML =
            'Las tres lunas de marte no están alineadas, inténtalo de nuevo';
        }
      });
  }
}

createBtn.addEventListener('click', handleClickCreate);