import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const storageKey = 'feedback-form-state';

  const saveStateToLocalStorage = throttle(() => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }, 500);

  form.addEventListener('input', saveStateToLocalStorage);

  const loadStateFromLocalStorage = () => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
      const formData = JSON.parse(storedData);
      form.elements.email.value = formData.email || '';
      form.elements.message.value = formData.message || '';
    }
  };

  loadStateFromLocalStorage();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    console.log(formData);

    form.reset();
  };

  form.addEventListener('submit', handleSubmit);
});
