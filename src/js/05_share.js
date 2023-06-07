//botón crear targeta
function handleClickCreate(event) {
  event.preventDefault();
  let allFieldComplete = true;
  debugger;
  for (let property in data) {
    if (data[property] === '') {
      msjError.innerHTML += `Rellena el campo ${property} </br>`;
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
          linkUrl.innerHTML = datos.cardURL;
          linkUrl.href = datos.cardURL;
        } else {
          msjError.innerHTML =
            'Las tres lunas de marte no están alineadas, intentelo de nuevo';
        }
      });
  }
}

createBtn.addEventListener('click', handleClickCreate);
