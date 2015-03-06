var showForm = function(){
  var registerForm = document.getElementById('register-form');
  registerForm.style.visibility = "visible";
};

document.getElementById('show-R-Form').addEventListener('click', showForm, false);

$('#show-R-Form').on('click', function(){
  $(this).fadeOut();
});

$('#hide-form').on('click', function(e){
  $('#register-form').fadeOut();
  e.preventDefault();
});
