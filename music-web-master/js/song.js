let fillbar = document.querySelector(".fill");
let audioo = ["../../dsk.mp3.mp3"];

let audio = new Audio();

window.onload = playSong();

function playSong() {
  audio.src = audioo[0];
  audio.play();
}

function PlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}

audio.addEventListener("timeupdate", function() {
  let filll = audio.currentTime / audio.duration;
  fillbar.style.width = filll * 100 + "%";
});