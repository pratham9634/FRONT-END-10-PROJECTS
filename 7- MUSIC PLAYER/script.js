let progress = document.getElementsByClassName("progress")[0];
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause"); 
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function(){
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}