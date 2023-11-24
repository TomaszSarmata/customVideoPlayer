const video = document.getElementById("video");
const play = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// HELPER FUNCTIONS

//play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//update the play / pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
}

//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
}

//set video time to progress
function setVideoProgress() {
  return true;
}

//stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// EVENT LISTENERS

video.addEventListener("click", toggleVideoStatus); //if the user clicks on the video it will play, it they click on it again it will pause

video.addEventListener("pause", updatePlayIcon); //that is to toggle the icon of the play button between play and pause

video.addEventListener("play", updatePlayIcon); //that is to toggle the icon of the play button between play and pause

video.addEventListener("timeupdate", updateProgress); //when the video plays it will update automatically the time progress

play.addEventListener("click", toggleVideoStatus); //that will either play or pause the video using play and pause buttons

stopButton.addEventListener("click", stopVideo); //that will stop the video when a user presses  the stop button

progress.addEventListener("change", setVideoProgress); //if a user slides the progress bar it will automatically starts playing the video from a specific moment (so the user can clide back and forth)
