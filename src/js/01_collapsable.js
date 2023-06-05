'use strict';
// variables
const designUnfold = document.querySelector('.js_design-color__unfold');
const designForm = document.querySelector('.js_color-selection');
const fillUnfold = document.querySelector('.js_fill-color__unfold');
const fillForm = document.querySelector('.js_fillform');
const fillArrow = document.querySelector('.js_arrow_fill');
const designArrow =document.querySelector('.js_arrow_design');
const shareUnfold = document.querySelector('.js_share__unfold');
const shareArrow = document.querySelector('.js_share__arrow');
const shareForm = document.querySelector('.js_share');
const collapsedHeader = document.querySelectorAll('.js-fieldset__header');
const collapsedContainer = document.querySelectorAll('.js-fieldset__container');
const fieldset = document.querySelectorAll ('.js-fieldset');


// funciones
/*function handleClickDesignUnfold(event) {
  event.preventDefault();
  if (designForm.classList.contains('collapsed')) {
    designForm.classList.remove('collapsed');
    fillForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
    fillArrow.classList.remove('arrowUp');
    designArrow.classList.add('arrowUp');
    shareArrow.classList.remove('arrowUp');
  }
}
function handleClickFillUnfold(event) {
  event.preventDefault();
  if (fillForm.classList.contains('collapsed')) {
    fillForm.classList.remove('collapsed');
    designForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
    designArrow.classList.remove('arrowUp');
    fillArrow.classList.add('arrowUp');
    shareArrow.classList.remove('arrowUp');
  }
}
function handleClickShareUnfold(event) {
  event.preventDefault();
  if (shareForm.classList.contains('collapsed')) {
    shareForm.classList.remove('collapsed');
    designForm.classList.add('collapsed');
    fillForm.classList.add('collapsed');
    fillArrow.classList.remove('arrowUp');
    shareArrow.classList.add('arrowUp');
    designArrow.classList.remove('arrowUp');
  }
}*/

function handleClickForm(event) {
const clickedHeader = event.currentTarget;
const parentClicked = clickedHeader.parentNode;
  for (let i = 0; i < fieldset.length; i++) {
    if (fieldset[i] === parentClicked) {
      collapsedContainer[i].classList.remove('collapsed');
    } else {
      collapsedContainer[i].classList.add('collapsed');
    }
  }
}



//eventos
/*designUnfold.addEventListener('click', handleClickDesignUnfold);
fillUnfold.addEventListener('click', handleClickFillUnfold);
shareUnfold.addEventListener('click', handleClickShareUnfold);*/
for (const header of collapsedHeader){
  header.addEventListener('click', handleClickForm);
}
