// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({})
  .add({
    targets: '.ml13 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1700 + 50 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 600 + 40 * i
  });
window.setTimeout(dispMsg, 6000);

function dispMsg() {
  location.href = "https://hgtomoro0726.github.io/KEYAKI_Test/top.html";
}
