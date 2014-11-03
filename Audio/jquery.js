var vid = document.getElementById("audio")
    function pauseVid(){
        var vid = document.getElementById("audio");
        vid.pause();
    }
    function playVid(){
        var vid = document.getElementById("audio");
        vid.play();
    }
    function frameChange(value){
        var vid = document.getElementById("audio");
        vid.currentTime += value;
    }

    function sneeze(){
        var vid = document.getElementById("audio");
        vid.currentTime = 11;
        vid.play();
    }
    function restart(){
        var vid = document.getElementById("audio");
        vid.currentTime = 0;
        vid.play();
    }
