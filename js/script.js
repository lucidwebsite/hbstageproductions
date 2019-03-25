
// hamburger menu display only on mobile view ports
//toggle mobile menu function
function toggleActive() {
  var toggle = document.getElementById("toggle-button");
  var overlay = document.querySelector("#overlay");
  toggle.classList.toggle("active")
  overlay.classList.toggle("open");
};

//fix height function for vh height divs intended to prevent page jumps on mobile devices
function fixAllHeights() {
  var divs = document.getElementsByClassName('mobile-height-fix');
  for(var i = 0; i < divs.length; i++) {
    var divHeight = divs[i].offsetHeight;
    divs[i].style.height = divHeight.toString() + 'px';
  }
};

window.onload = function initFunc() {
  //check if in mobile browser
  if(typeof window.orientation !== 'undefined') {
     fixAllHeights();
   }

  document.querySelector("#toggle-button").addEventListener("click", toggleActive);
  //close mobile menu
  if (document.documentElement.offsetWidth > 950) {
    setScrollEventListener(true);
  }
};

window.onresize = function resizeFunc() {
  if (document.documentElement.offsetWidth > 950 &&
    document.querySelector("#overlay").classList.contains('open')) {
    toggleActive();
  }
  if (document.documentElement.offsetWidth > 950) {
    setScrollEventListener(false);
  }

};
