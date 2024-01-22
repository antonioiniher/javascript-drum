function playSound(event) {
  const audio = document.querySelector(`audio[data-key=${event.code}]`)
  const key = document.querySelector(`.key[data-key=${event.code}]`)
  audio.currentTime = 0
  if (!audio) return
  audio.play()
  key.classList.add('playing')
}

function removeTransition(event) {
  console.log(event)
  if (event.propertyName !== 'transform') return
  this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
