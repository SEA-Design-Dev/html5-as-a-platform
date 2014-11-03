$(document).ready(function(){

  // Get all fields
  var fields = $('input, textarea, select');

  // Set any previous data
  fields.each(function(){
    $(this).val(localStorage[$(this).attr('id')]);
  });

  // Before we leave, let's set some data
  $(window).unload(function(){
    fields.each(function(){
      localStorage.setItem($(this).attr('id'), $(this).val());
    })
  });

  document.getElementById("clear-button").onclick=function(){
    localStorage.clear();
  };
});

