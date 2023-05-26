'use strict';
// variables
const designUnfold = document.querySelector('.js_design-color__unfold');
const designForm = document.querySelector('.js_color-selection');
const fillUnfold = document.querySelector('.js_fill-color__unfold');
const fillForm = document.querySelector('.js_fillform');
const fillArrow = document.querySelector('.js_arrow_fill');
const designArrow =document.querySelector('.js_arrow_design');

// funciones
function handleClickDesignUnfold(event) {
  event.preventDefault();
  if (designForm.classList.contains('collapsed')) {
    designForm.classList.remove('collapsed');
    fillForm.classList.add('collapsed');
    fillArrow.classList.remove('arrowUp');
    designArrow.classList.add('arrowUp');
  } else {
    designForm.classList.add('collapsed');
    designArrow.classList.remove('arrowUp');
  }
}
function handleClickFillUnfold(event) {
  event.preventDefault();
  if (fillForm.classList.contains('collapsed')) {
    fillForm.classList.remove('collapsed');
    designForm.classList.add('collapsed');
    designArrow.classList.remove('arrowUp');
    fillArrow.classList.add('arrowUp');
  } else {
    fillForm.classList.add('collapsed');
    fillArrow.classList.remove('arrowUp');
  }
}
// function arrowRotate() {
//   if(designForm.classList.add('collapsed');)
//   fillArrow.classList.add('arrowUp');
//   }

// }

//eventos
designUnfold.addEventListener('click', handleClickDesignUnfold);
fillUnfold.addEventListener('click', handleClickFillUnfold);
