const records = [];
const myForm = document.getElementById('signUp');

const reset = document.getElementById('btn-reset');
reset.addEventListener('click',() => {
  myForm.reset();
});
const signUp = document.getElementById('btn-sign-up');
signUp.addEventListener('click',signUpForm);

function signUpForm(){
  let value = true;

  const emailValue = document.getElementById('email').value.trim();
  const usernameValue = document.getElementById('username').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  const password2Value = document.getElementById('password2').value.trim();

  const email_msg = document.getElementById('email_msg');
  const username_msg = document.getElementById('username_msg');
  const password_msg = document.getElementById('password_msg');
  const password2_msg = document.getElementById('password2_msg');
  email_msg.innerHTML = "";
  username_msg.innerHTML = "";
  password_msg.innerHTML = "";
  password2_msg.innerHTML = "";

  if(emailValue === ''){
    email_msg.innerHTML = 'Email cannot be blank';
    value = false;
  } else if(!isEmail(emailValue)) {
    email_msg.innerHTML = 'Email is not invalid';
    value = false;
  }

  if(usernameValue === ''){
    username_msg.innerHTML = 'UserName cannot be blank';
    value = false;
  }else if(!isName(usernameValue)){
    username_msg.innerHTML = 'User name is not invalid';
    value = false;
  }

  if(passwordValue === ''){
    password_msg.innerHTML = 'Password cannot be blank';
    value = false;
  } else if(passwordValue.length<8 || passwordValue.length>20){
    password_msg.innerHTML = 'Password be must greater than 8 and less than 20';
    value = false;
  }

  if(password2Value === ''){
    password2_msg.innerHTML = 'Password Confirm cannot be blank';
    value = false;
  } else if(passwordValue !== password2Value){
    password2_msg.innerHTML = 'Password Confirm does not match';
    value = false;
  }

  if(value==true){
    const info = document.getElementById('display_info');
    info.innerHTML = `Email: ${emailValue}</br>
    Username: ${usernameValue}</br>
    Password: ${passwordValue}</br>
    Password: ${password2Value}</br>`

    const newRecord = {
      email: emailValue,
      username: usernameValue,
      password: passwordValue,
      password2: password2Value
    }

    records.push(newRecord);
    drawTable();
  }
}

function drawTable() {
  const table = document.getElementById('myTbody');
  let txt = '';

  for (let x of records) {
    txt = txt + `<tr>
                  <td>${x.email}</td>
                  <td>${x.username}</td>
                  <td>${x.password}</td>
                  <td>${x.password2}</td>
                 </tr>`;
  }table.innerHTML = txt;
}

function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isName(username) {
  const re = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  return re.test(String(username));
}
