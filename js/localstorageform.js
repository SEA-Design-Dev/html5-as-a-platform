var firstname = document.getElementById('first-name');
var lastname = document.getElementById('last-name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var textbox = document.getElementById('textbox');

firstname.value = localStorage.getItem('first-name');
lastname.value = localStorage.getItem('last-name');
email.value = localStorage.getItem('email');
phone.value = localStorage.getItem('phone');
textbox.value = localStorage.getItem('textbox');

firstname.addEventListener('input', function () {
  localStorage.setItem('first-name', firstname.value);
}, false);

lastname.addEventListener('input', function () {
  localStorage.setItem('last-name', lastname.value);
}, false);

email.addEventListener('input', function () {
  localStorage.setItem('email', email.value);
}, false);

phone.addEventListener('input', function () {   localStorage.setItem('phone', phone.value);
}, false);

textbox.addEventListener('input', function () {    localStorage.setItem('textbox', textbox.value);
}, false);
