const song = document.getElementById("music");
// let best = document.getElementById("best");
function msg() {
  if (song.paused) {
    // best.innerText = "Rahulwa: East or West, My akkoi is the Best. 💕";
    song.play();
  } else {
    song.pause();
    song.currentTime = 0;
  }
}
