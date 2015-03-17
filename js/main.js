$('#show-R-Form').on('click', function() {
  $('#register-form').removeClass('hidden');
});

$('#show-R-Form').on('click', function(){
  $(this).fadeOut();
});

$('#hide-form').on('click', function(e){
  $('#register-form').fadeOut();
  e.preventDefault();
});

