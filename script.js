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
  return true;
}

//update progress and timestamp
function updateProgress() {
  return true;
}

//set video time to progress
function setVideoProgress() {
  return true;
}

//stop the video
function stopVideo() {
  return true;
}

// EVENT LISTENERS

video.addEventListener("click", toggleVideoStatus); //if the user clicks on the video it will play, it they click on it again it will pause

video.addEventListener("pause", updatePlayIcon); //that is to toggle the icon of the play button between play and pause

video.addEventListener("play", updatePlayIcon); //that is to toggle the icon of the play button between play and pause

video.addEventListener("timeupdate", updateProgress); //when the video plays it will update automatically the time progress

play.addEventListener("click", toggleVideoStatus); //that will either play or pause the video using play and pause buttons

stopButton.addEventListener("click", stopVideo); //that will stop the video when a user presses  the stop button

progress.addEventListener("change", setVideoProgress); //if a user slides the progress bar it will automatically starts playing the video from a specific moment (so the user can clide back and forth)
