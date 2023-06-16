'use strict';
//borrar clases paleta de colores html y radio checked

function remove() {
  if (previewCard.classList.contains('palette1')) {
    previewCard.classList.remove('palette1');
    //radio1.checked = true;
  } else if (previewCard.classList.contains('palette2')) {
    previewCard.classList.remove('palette2');
    
  } else if (previewCard.classList.contains('palette3')) {
    previewCard.classList.remove('palette3');
    
  } else if (previewCard.classList.contains('palette4')) {
    previewCard.classList.remove('palette4');

  } else if (previewCard.classList.contains('palette5')) {
    previewCard.classList.remove('palette5');
  
  } else if (previewCard.classList.contains('palette6')) {
    previewCard.classList.remove('palette6');
  }
}
// añadir al preview palette seleccionada y guardado en data
function clickRadio1() {
  remove();
  previewCard.classList.add('palette1');
  data.palette = '1';
  localStorage.setItem('cardData', JSON.stringify(data));
}
function clickRadio2() {
  remove();
  previewCard.classList.add('palette2');
  data.palette = '2';
  localStorage.setItem('cardData', JSON.stringify(data));
}
function clickRadio3() {
  remove();
  previewCard.classList.add('palette3');
  data.palette = '3';
  localStorage.setItem('cardData', JSON.stringify(data));
}
function clickRadio4() {
  remove();
  previewCard.classList.add('palette4');
  data.palette = '4';
  localStorage.setItem('cardData', JSON.stringify(data));
}
function clickRadio5() {
  remove();
  previewCard.classList.add('palette5');
  data.palette = '5';
  localStorage.setItem('cardData', JSON.stringify(data));
}
function clickRadio6() {
  remove();
  previewCard.classList.add('palette6');
  data.palette = '6';
  localStorage.setItem('cardData', JSON.stringify(data));
}

radio1.addEventListener('click', clickRadio1);
radio2.addEventListener('click', clickRadio2);
radio3.addEventListener('click', clickRadio3);
radio4.addEventListener('click', clickRadio4);
radio5.addEventListener('click', clickRadio5);
radio6.addEventListener('click', clickRadio6);