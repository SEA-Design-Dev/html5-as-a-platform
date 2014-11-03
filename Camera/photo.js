// Browser Camera from David Walsh http://davidwalsh.name/browser-camera
// Canvas Drawing Adapted from bogonko http://stackoverflow.com/questions/2368784/draw-by-mouse-with-html5-canvas
//http://jsfiddle.net/ArtBIT/kneDX/

// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
  // Grab elements, create settings, etc.
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = { "video": true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code);
    };

  // Put video listeners into place
  if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }

}, false);

document.getElementById("snap").addEventListener("click", function() {
  canvas.getContext("2d").drawImage(video, 0, 0, 640, 480);

  //Add Drawing Functionality
  var ctx = canvas.getContext("2d");
    // define a custom fillCircle method
    ctx.fillCircle = function(x, y, radius, fillColor) {
      this.fillStyle = fillColor;
      this.beginPath();
      this.moveTo(x, y);
      this.arc(x, y, radius, 0, Math.PI * 2, false);
      this.fill();
    };
    // bind mouse events
    canvas.onmousemove = function(e) {
      if (!canvas.isDrawing) {
         return;
      }
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var radius = 3; // or whatever
      var fillColor = '#000000';
      ctx.fillCircle(x, y, radius, fillColor);
    };
    canvas.onmousedown = function(e) {
      canvas.isDrawing = true;
    };
    canvas.node.onmouseup = function(e) {
      canvas.isDrawing = false;
    };

});

