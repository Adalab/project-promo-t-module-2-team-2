'use strict';

const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');

const previewCard = document.querySelector('js_preview-card');
function remove() {
  previewCard.classList.remove('palette1', 'palette2', 'palette3');
}

function clickRadio1 (event) {
  remove();
  previewCard.classList.add ('palette1');
}
function clickRadio2 (event) {
  remove();
  previewCard.classList.add ('palette2');
}
function clickRadio3 (event) {
  remove();
  previewCard.classList.add ('palette3');
}

radio1.addEventListener ('click', clickRadio1);
radio2.addEventListener ('click', clickRadio2);
radio3.addEventListener ('click', clickRadio3);