const modalWindow = document.querySelector('.modal');
const modalOpenButton = document.querySelector('#modal-open-button');
const modalCloseButton = document.querySelector('#modal-close-button');
const modalCancelButton = document.querySelector('#modal-cancel-button');
const form = document.querySelector('#modal-form');
const root = document.querySelector('.root');
const successMessage = document.querySelector('.modal__success-message');
  const errorMessage = document.querySelector('.modal__error-message');

const closeModal = (evt) => {
  if (evt.target === root || evt.target === modalCancelButton || evt.target === modalCloseButton) {
    modalWindow.classList.remove('modal--active');
    root.removeEventListener('click', closeModal);
  }
  if (successMessage.classList.contains('visible')) {
    successMessage.classList.remove('visible');
  }
  if (errorMessage.classList.contains('visible')) {
    errorMessage.classList.remove('visible');
  }
};

const openModal = () => {
  modalWindow.classList.add('modal--active');
  root.addEventListener('click', closeModal);
  form.setAttribute('novalidate', 'true');
  form.reset();
};

modalOpenButton.addEventListener('click', openModal);

const validateForm = (evt) => {
  evt.preventDefault();
  let valid = true;
  form.querySelectorAll('input[type="radio"]').forEach((input) => {
    if (input.validity.valid) {
      valid = true;
    } else {
      valid = false;
    }
  })
  if (valid) {
    successMessage.classList.add('visible');
    errorMessage.classList.remove('visible');
    form.submit();
  } else {
    errorMessage.classList.add('visible');
    successMessage.classList.remove('visible');
  }
}

form.addEventListener('submit', closeModal);
form.addEventListener('submit', validateForm);

