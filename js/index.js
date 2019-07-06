
const arrow = document.querySelector('.jump-down i')
function wobble() {
  arrow.style.animationName = 'wobble'
  arrow.style.animationDuration = '1s'
  arrow.style.animationTimingFunction = "ease-in-out"
  arrow.style.animationIterationCount = "1"
}


window.setInterval(wobble, 5000)

