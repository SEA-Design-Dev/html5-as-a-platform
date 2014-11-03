
//-------audio player---------

var music = document.getElementById('music');
// for audio element
var pButton = document.getElementById('pButton');
// for play button

//play and pause function

function play() {
// start music
if (music.paused) {
music.play();

// no play, add pause
pButton.className = "";
pButton.className = "pause";
} else { // pause music
music.pause();

// no pause, add play
pButton.className = "";
pButton.className = "play";
}
}


//-------video player---------


windows.onload = function() {
var video = document.getElementById("video");
var playButton = document.getElementById("play-pause");
var fullScreenButton = document.getElementById("full-screen");
var volumeBar = document.getElementById("volume-bar");
}

//adding eventlistener for play() & pause() functions

playButton.addEventListener ("click", function() {

if (video.paused == true) {

//use play() and pause() to control playback
video.play();
playButton.innerHTML = "Pause";
} else { video.pause();
playButton.innerHTML = "Play";
}
});

//eventlistener for requestFullscreen()

fullScreenButton.addEventListener ("click", function() {

if (video.requestFullscreen; {
  video.requestFullscreen();
} else if (video.mozRequestFullScreen() {
  video.mozRequestFullScreen();
} else if (video.webkitRequestFullscreen(); {
  video.webkitRequestFullscreen();
}
});

//eventlistener for volume()

volumeBar.addEventListener("change", function() {
//min/max attribute
  video.volume = volumeBar.value;
});


