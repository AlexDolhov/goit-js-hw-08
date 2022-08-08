import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const INPUT_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputValues, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

function onInputValues(e) {
  formData = JSON.parse(localStorage.getItem(INPUT_KEY)) || {};

  formData[e.target.name] = e.target.value;

  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}
//=============================
restoreInputData();

function restoreInputData() {
  const savedData = JSON.parse(localStorage.getItem(INPUT_KEY));

  if (!savedData) {
    return;
  }
  form.email.value = savedData.email || '';
  form.message.value = savedData.message || '';
}
//=============================

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(INPUT_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
}
