// From Jon Duckett's Javascript and Jquery 2014 and David Winer's local storage demo
if (typeof (Storage) != undefined) {
  // Get form elements
  var txtName = document.getElementById('name');
  var txtEmail = document.getElementById('email');
  var txtMessage = document.getElementById('message');

  // Elements populated by localStorage data
  txtName.value = localStorage.getItem('name');
  txtEmail.value = localStorage.getItem('email');
  txtMessage.value = localStorage.getItem('message');

  // Data saved on keyup
  txtName.addEventListener('input', function () {
      localStorage.setItem('name', txtName.value);
  }, false);

  txtEmail.addEventListener('input', function () {
      localStorage.setItem('email', txtEmail.value);
  }, false);

  txtMessage.addEventListener('input', function () {
      localStorage.setItem('message', txtMessage.value);
  }, false);

  //clear local Storage by Keys on submit
  document.getElementById('submit').addEventListener('click', function () {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('message');
  }, false);
};
