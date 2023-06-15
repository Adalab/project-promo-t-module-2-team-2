'use strict';
//botón crear targeta
function handleClickCreate(event) {
  msjError.innerHTML = '';
  event.preventDefault();
  let allFieldComplete = true;

  if (data.palette === '') {
    msjError.innerHTML += `Elige algún color de la sección diseña </br>`;
    allFieldComplete = false;
  }
  for (let input in inputsValues) {
    if (inputsValues[input].value === '') {
      msjError.innerHTML += `Rellena el campo ${inputsValues[input].name} <br>`;
      allFieldComplete = false;
    }
  }

  if (allFieldComplete === true) {
    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((datos) => {
        if (datos.success) {
          linkUrl.innerHTML = `<a target="_blank" href="${datos.cardURL}">${datos.cardURL}</a>`;
          success.classList.remove('collapsed');
          twitter.classList.remove('collapsed');
          twitterLink.href =
            'https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20de%20contacto:&url=' +
            datos.cardURL;
          msjError.innerHTML = '';
        } else {
          msjError.innerHTML = `Las tres lunas de marte no están alineadas, inténtalo de nuevo...<br><img class="img-error-one" src="./assets/images/error-one.gif">`;
        }
      });
  }
}

createBtn.addEventListener('click', handleClickCreate);
