window.addEventListener('DOMContentLoaded', function() {
  video = document.getElementById('video');
  videoObj = { "video": true },
  errBack = function(error) {
    console.log("Video capture error: ", error.code);
  };
  navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

  navigator.getUserMedia(videoObj, function(stream){
    video.src = window.URL.createObjectURL(stream) || window.webkitURL.createObjectURL(stream) || stream;
    video.play();
  }, errBack);
  var button = document.getElementById('button');
  button.onclick = function() {
    var photo = document.getElementById('photo');
    context = photo.getContext('2d');
    context.drawImage(video, 0, 0, 320, 240);
    var sepia = document.getElementById('sepia');
    var grayscale = document.getElementById('grayscale');
    var opacity = document.getElementById('opacity');
    var blur = document.getElementById('blur');
    /*$("canvas").css({
      //'-webkit-filter': 'opacity(0.' + opacity.value + ')' //'hue-rotate(120deg)'
      //'opacity': "(" + (opacity.value/10) + ")",
      //'-webkit-filter': "sepia(" + sepia.value + ")",
      //'-webkit-filter': "blur(" + blur.value + "px)",
      //'-webkit-filter': 'opacity(0.' + opacity.value + ')',
      //'-webkit-filter': 'grayscale(0.' + grayscale.value + ")",
    });*/
    $("canvas").css('opacity', "0." + opacity.value);
    $("canvas").css('-webkit-filter', "grayscale(0." + grayscale.value + ")");
    //$("canvas").css('-webkit-filter', "blur(" + blur.value + "px)");
    //$("canvas").css("-webkit-filter", "sepia(" + sepia.value + ")")
  };
}, false)

//Local Storage
var wholename = document.getElementById('wholename');
var mailaddress = document.getElementById('mailaddress');
var message = document.getElementById('message')

wholename.value = localStorage.getItem('wholename');
mailaddress.value = localStorage.getItem('mailaddress');
message.value = localStorage.getItem('message');

wholename.addEventListener('input', function () {
  localStorage.setItem('wholename', wholename.value);
}, false);

mailaddress.addEventListener('input', function () {
  localStorage.setItem('mailaddress', mailaddress.value);
}, false);

message.addEventListener('input', function () {
  localStorage.setItem('message', message.value);
}, false);
