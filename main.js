const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const exclamation = document.getElementById('exclamation');
const submit = document.getElementById('submitEmail');

form.addEventListener('submit', (e) => {
  if (emailInput.value.match(emailMatch)) {
    exclamation.style.display = 'none';
    emailError.style.display = 'none';
  } else {
    exclamation.style.display = 'block';
    emailError.style.display = 'block';
    emailInput.placeholder = 'janeappleseed@email.com';
    e.preventDefault();
  }
})