$(document).ready(function(){
  
  // Get all fields
  var fields = $('input');
  
  // Set any previous data
  fields.each(function(){
    console.log($(this).attr('id'));
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
