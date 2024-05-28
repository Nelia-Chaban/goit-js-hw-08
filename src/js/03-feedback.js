import throttle from 'lodash.throttle';
import { common } from './common';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let formData = JSON.parse(localStorage.getItem(common.KEY_FORM_FEEDBACK)) ?? {};

const { email, message } = form.elements;
pageReload();

function onInput() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(common.KEY_FORM_FEEDBACK, JSON.stringify(formData));
}

function pageReload() {
  if (formData) {
    email.value = formData.email ?? '';
    message.value = formData.message ?? '';
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please fill in all fields!');
  }
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(common.KEY_FORM_FEEDBACK);
  evt.currentTarget.reset();
}
