// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNode(event) {

  let audioKeyCode = getKeyCode(event);

  //typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  //if key exists
  const isKeyExists = key

  if (!isKeyExists) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add("playing")
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

function getKeyCode(event) {
  let keyCode;

  //Checa qual é o event
  const isKeyboard = event.type === "keydown"
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  // play audio
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

//click with mouse
keys.forEach(function (key) {
  key.addEventListener("click", playNode)
  key.addEventListener('transitionend', removePlayingClass)
})

// keyboard type
window.addEventListener("keydown", playNode)
