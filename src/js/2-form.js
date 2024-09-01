const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageTextarea = form.elements['message'];

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  updateLocalStorage();
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email;
    messageTextarea.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
}

function resetForm() {
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  resetForm();
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormData);
