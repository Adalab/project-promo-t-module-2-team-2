//botón crear tarjeta

function handleClickCreate(event) {
  event.preventDefault();
  let allFieldComplete = true;
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
      headers: {'content-type': 'application/json',},
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          linkUrl.innerHTML = data.cardURL;
          linkUrl.href = data.cardURL;
          success.classList.remove('collapsed');
          twitter.classList.remove('collapsed');
        } else {
          msjError.innerHTML =
            'Las tres lunas de marte no están alineadas, inténtalo de nuevo';
        }
      });
  }
}

createBtn.addEventListener('click', handleClickCreate);