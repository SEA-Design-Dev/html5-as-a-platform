// on click show form

var form = document.getElementById('register-form');
var registerBtn = document.getElementById('showForm');
function showForm(){
  form.style.visibility='visible';
}
registerBtn.addEventListener('click', showForm);

// $('#hide-form').on('click', function(e){
//   $('#register-form').fadeOut();
//   e.preventDefault();
// });

// hide form

var exitBtn=document.getElementById('hide-form');
function hideForm(){
  form.style.visibility='hidden';
}
exitBtn.addEventListener('click', hideForm);

// $('#show-drop-menu').on('click', function(){
//   $('#drop-menu').slideToggle();
// });

// on click show drop menu

var dropMenu = document.getElementById('dropMenu');
var showDropMenu = document.getElementById('showDropMenu');
function dropDown(){
  if (dropMenu.style.display=='block'){
    dropMenu.style.display='none'
  } else{
    dropMenu.style.display='block'
  }
}

showDropMenu.addEventListener('click', dropDown);

