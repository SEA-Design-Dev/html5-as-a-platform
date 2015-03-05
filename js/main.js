var showForm = function(){
  var registerForm = document.getElementById('register-form');
  registerForm.style.visibility = "visible";
};

document.getElementById('show-R-Form').addEventListener('click', showForm, false);

// var showAlert = function(){
//   var alertBox = document.getElementById('alert-box');
//   alertBox.style.visibility = "visible";
// };

// document.getElementById('hide-form').addEventListener('click', showAlert, false, function(){
//   $('#alert-box').delay(1000).fadeOut();
// });

$('#show-R-Form').on('click', function(){
  $(this).fadeOut();
});

$('#hide-form').on('click', function(e){
  $('#register-form').fadeOut();
  e.preventDefault();
});
