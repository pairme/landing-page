
const arrow = document.querySelector('.jump-down i')
function wobble() {
  console.log(arrow)
  arrow.style.animationName = 'hvr-wobble-vert'
  arrow.style.animationDuration = '1s'
  arrow.style.animationTimingFunction = "ease-in-out"
  // arrow.style.animationIterationCount = "1"
}
// function unwobble() {
//   arrow.style.animationDelay = '1s'

// }

window.setInterval(wobble, 5000)
// window.setInterval(unwobble, 3000)


/* Wobble Vertical */

/*

.hvr-wobble-vert {
  display: inline-block;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-wobble-vert:hover, .hvr-wobble-vert:focus, .hvr-wobble-vert:active {
  -webkit-animation-name: hvr-wobble-vertical;
  animation-name: hvr-wobble-vertical;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
*/
