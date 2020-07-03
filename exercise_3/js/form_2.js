const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

form.addEventListener('submit',(e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get the values from the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if(usernameValue === '') {
    setErrorFor(username, 'User cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not invalid');
  } else {
    setSuccessFor(email);
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if(passwordValue.length<7){
    setErrorFor(password, 'Password must be greater than 7');
  } else {
    setSuccessFor(password);
  }

  if(passwordConfirmValue === '') {
    setErrorFor(passwordConfirm, 'Password Confirm cannot be blank');
  } else if(passwordValue !== passwordConfirmValue){
    setErrorFor(passwordConfirm, 'Password Confirm does not match');
  } else {
    setSuccessFor(passwordConfirm);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
