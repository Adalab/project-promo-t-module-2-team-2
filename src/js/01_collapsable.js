'use strict';
// variables
const collapsedHeader = document.querySelectorAll('.js-fieldset__header');
const collapsedContainer = document.querySelectorAll('.js-fieldset__container');
const fieldset = document.querySelectorAll('.js-fieldset');
const allArrow = document.querySelectorAll('.js_arrow');


// funciones
function handleClickForm(event) {
  const clickedHeader = event.currentTarget;
  const parentClicked = clickedHeader.parentNode;
  for (let i = 0; i < fieldset.length; i++) {
    if (fieldset[i] === parentClicked) {
      collapsedContainer[i].classList.remove('collapsed');
      allArrow[i].classList.add('arrowUp');
    } else {
      collapsedContainer[i].classList.add('collapsed');
      allArrow[i].classList.remove('arrowUp');
    }
  }
}


//eventos
for (const header of collapsedHeader){
  header.addEventListener('click', handleClickForm);
}
