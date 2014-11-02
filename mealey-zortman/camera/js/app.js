
// Create enclosure for camera
var camera = function(){
  
  // Feed properties
  var videoObj = { 
    video: {
      mandatory: {
        maxWidth: 533,
        maxHeight: 400
      }
    }
  };
  
  // Properties
  var p = {
    video: undefined,
    counter: undefined,
    flash: undefined
  }
  
  // Set properties
  function publicSetProp(prop, value){
    p[prop] = value;
  }
  
  // Error function
  function errBack(error){
    console.log(error);
    $('<p/>').text("No camera access :(").addClass("error").prependTo('.counter-container');
  }
  
  // Last steps to take a picture
  function flash(){
    p.counter.hide();
    p.flash.show().fadeOut(300);
    $(p.video).closest('.container').removeClass('live');
  }
  
  // Count down
  function publicCountDown(){
    // Set the countdown
    var counter = 2;
    $(p.video).closest('.container').addClass('live');
    p.counter.show().html(counter + 1);
    var timer = setInterval(function(){
      if(counter < 1){
        clearInterval(timer);
        publicSnap();
      }
      p.counter.html(counter);
      counter--;
    }, 1000);
  }
  
  // Take a snapshot
  function publicSnap(method){
    var orig = $('canvas:first');
    var canvas = orig.clone().appendTo('.filmstrip')[0];
    
    // How fast the shot happens
    if(method == 'rapid'){
      var speed = 200;
    } else {
      var speed = 2000;
    }
    
    var ctx = canvas.getContext('2d');
    var sourceX = (p.video.width - p.video.height) / 2;
    var sourceY = 0;
    var sourceWidth = 400;
    var sourceHeight = 400;
    var destWidth = canvas.width;
    var destHeight = canvas.height;
    var destX = 0;
    var destY = 0;

    $(canvas).hide().fadeIn(speed);
    
    flash();
    
    setTimeout(function(){
      ctx.drawImage(p.video, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    }, 250)
    
  }
  
  // Feeds the video camera data
  function publicFeed(){
    if(navigator.getUserMedia) { // Standard
      navigator.getUserMedia(videoObj, function(stream) {
        p.video.src = stream;
        p.video.play();
      }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
      navigator.webkitGetUserMedia(videoObj, function(stream){
        p.video.src = window.webkitURL.createObjectURL(stream);
        p.video.play();
      }, errBack);
    }
    else if(navigator.mozGetUserMedia) { // Firefox-prefixed
      navigator.mozGetUserMedia(videoObj, function(stream){
        p.video.src = window.URL.createObjectURL(stream);
        p.video.play();
      }, errBack);
    }
  }
  
  return {
    set: publicSetProp,
    feed: publicFeed,
    snap: publicSnap,
    countdown: publicCountDown
  }
}();

$(document).ready(function(){

  camera.set('video', $('#display')[0]);
  camera.set('counter', $('.counter'));
  camera.set('flash', $('.flash'));
  camera.feed();
  
  $('.monitor').click(camera.countdown);
  $(document).keyup(function(event){
    switch(event.which){
      case 13:
        camera.countdown();
        break;
      case 32:
        camera.snap('rapid');
        break;
    }
  });
  
});