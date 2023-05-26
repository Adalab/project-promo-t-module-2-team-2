'use strict';
// variables
const designUnfold = document.querySelector('.js_design-color__unfold');
const designForm = document.querySelector('.js_color-selection');
const fillUnfold = document.querySelector('.js_fill-color__unfold');
const fillForm = document.querySelector('.js_fillform');

// funciones
function handleClickDesignUnfold(event) {
  event.preventDefault();
  if (designForm.classList.contains('collapsed')) {
    designForm.classList.remove('collapsed');
    fillForm.classList.add('collapsed');
  } else {
    designForm.classList.add('collapsed');
  }
}
function handleClickFillUnfold(event) {
  event.preventDefault();
  if (fillForm.classList.contains('collapsed')) {
    fillForm.classList.remove('collapsed');
    designForm.classList.add('collapsed');
  } else {
    fillForm.classList.add('collapsed');
  }
}

//eventos
designUnfold.addEventListener('click', handleClickDesignUnfold);
fillUnfold.addEventListener('click', handleClickFillUnfold);