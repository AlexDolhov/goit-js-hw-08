import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const INPUT_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputValues, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onInputValues(e) {
  //   console.log(form.email.value);
  //   console.log(form.message.value);
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;

  // console.log(formData);
  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}
//=============================
restoreInputData();

function restoreInputData() {
  const savedData = JSON.parse(localStorage.getItem(INPUT_KEY));

  if (savedData) {
    // console.log(savedData);
    form.email.value = savedData['email'] || '';
    form.message.value = savedData['message'] || '';
  }
}
//=============================

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(INPUT_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
}
