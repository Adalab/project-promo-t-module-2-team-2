'use strict';
//borrar clases paleta de colores html y radio checked
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

radio1.addEventListener('click', clickRadio1);
radio2.addEventListener('click', clickRadio2);
radio3.addEventListener('click', clickRadio3);