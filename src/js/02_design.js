'use strict';
// variables
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const previewCard = document.querySelector('.js_preview-card');
// funciones
function remove() {
  if (previewCard.classList.contains('palette1')) {
    previewCard.classList.remove('palette1');
  } else if (previewCard.classList.contains('palette2')) {
    previewCard.classList.remove('palette2');
  } else if (previewCard.classList.contains('palette3')) {
    previewCard.classList.remove('palette3');
  }
}
function clickRadio1() {
  remove();
  previewCard.classList.add('palette1');
}
function clickRadio2() {
  remove();
  previewCard.classList.add('palette2');
}
function clickRadio3() {
  remove();
  previewCard.classList.add('palette3');
}
//eventos
radio1.addEventListener('click', clickRadio1);
radio2.addEventListener('click', clickRadio2);
radio3.addEventListener('click', clickRadio3);
