$(document).ready(function(){
  $('input').each(function(){
    $(this).val(localStorage[$(this).attr('id')]);
  }).blur(function(){
    console.log($(this));
    localStorage.setItem($(this).attr('id'), $(this).val());
  });
});
