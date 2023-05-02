// const key_value = document.querySelector(".key").getAttribute("data-key");
// const audio_value = document.querySelector("audio").getAttribute("data-key");

window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // if (key !== "e.keyCode") return;

  key.classList.add("playing");

  if (!audio) {return}; // Stop the function from running all of them together
  audio.currentTime = 0;
  audio.play();

});

function removeTransition(e) {

  if (e.propertyName !== "transform") return;
  // console.log(e.propertyName);

  this.classList.remove("playing");
}


keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
  
});

// play audio - "document.querySelectorAll("audio")[4].play();"
