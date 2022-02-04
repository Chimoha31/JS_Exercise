'use strict';
/*
Exercises 01
------------
Add a label to each of the input fields: username, password, confirm password
*/
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPWD = document.querySelector('#confirmPassword');
const div = document.querySelectorAll('.col');

username.insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>');
password.insertAdjacentHTML('beforeBegin', '<label for="password">Passwoord: </label>');
confirmPWD.insertAdjacentHTML('beforeBegin', '<label foe="confirmPassword">Confirm Password: </label>');

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
const checkInput = (e) => {
  const errorEl = Array.from(e.target.parentNode.querySelectorAll('span'));
  if(e.target.value === "" && !errorEl.length) {
    e.target.insertAdjacentHTML('afterEND', '<span class="text-danger">Required</span>');
  }
  if(errorEl && e.target.value !== '') {
    errorEl.forEach(el => el.remove());
  }
};
username.addEventListener('blur', checkInput);
password.addEventListener('blur', checkInput);
confirmPWD.addEventListener('blur', checkInput);

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/