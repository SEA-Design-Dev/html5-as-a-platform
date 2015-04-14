// 1. Hide fenced yard option
$("#yardOption").hide();

// 2. When user selects "dog", fenced yard option appears
$("#type").on("focusout", function() {
  if ($("select option:selected").val() == "dog") {
    $("#yardOption").show();
  }
});



// cat popup
$("#adoptCat").hide();

$("#submit").on("click", function(e) {
  e.preventDefault();
  if ($("input").val()) {
    $("#adoptCat").show();
  }
});

