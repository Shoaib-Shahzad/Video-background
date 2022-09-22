var video = document.getElementById('video');
var button = document.getElementById('btn');

function stop(){
    if(video.paused){
        video.play();
        button.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>Pause'
    } else{
        video.pause();
        button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>Play';
    }
}