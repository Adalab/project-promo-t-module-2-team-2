'use strict';
//botón crear targeta
function handleClickCreate(event) {
    msjError.innerHTML=''
  event.preventDefault();
  let allFieldComplete = true;
  debugger;

  if (data.palette === '') {
    msjError.innerHTML += `Elige algún color de la sección diseña </br>`;
    allFieldComplete = false;
  }
  for (let input in inputsValues) {
    if (inputsValues[input].value === '') {
      msjError.innerHTML += `Rellena el campo ${inputsValues[input].name} </br>`;
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
        if (datos.success) {
          linkUrl.innerHTML = `<a href="${datos.cardURL}">${datos.cardURL}</a>`;
        } else {
          msjError.innerHTML =
            'Las tres lunas de marte no están alineadas, intentelo de nuevo';
        }
      });
  }
}

createBtn.addEventListener('click', handleClickCreate);
