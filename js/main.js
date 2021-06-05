'use strict'; //vh

var vh = window.innerHeight * 0.01; //for-menu

var burger = document.querySelector('.btn--burger');
var header = document.querySelector('.header');
var body = document.body; //vh

document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px')); //for-menu-close-on-resize

  if (this.window.innerWidth >= 769) {
    hideBurger();
  }
});
var navbarLink = document.querySelector('[data-scroll].navbar__link');
navbarLink.addEventListener('click', function () {
  hideBurger();
}); //menu

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('stop-scroll');
}); // vimeo play

if (document.querySelector('.portfolio__items')) {
  var portfolioPlay = document.querySelectorAll('.portfolio__play');
  var vimeoFrame = document.querySelectorAll('.video-frame'); //const vimeoFrame = new Vimeo.Player(document.querySelectorAll('.video-frame'));

  portfolioPlay.forEach(function (el) {
    el.addEventListener('click', function () {
      var parentPortfolioPlay = el.parentElement;
      portfolioPlay.forEach(function (element) {
        element.parentElement.classList.remove('active');
      });
      vimeoFrame.forEach(function (element) {
        //element.api('pause');
        var ss = new Vimeo.Player(element);
        ss.pause();
      });
      parentPortfolioPlay.classList.add('active');
      var currVideoPortfolio = new Vimeo.Player(parentPortfolioPlay.querySelector('iframe'));
      currVideoPortfolio.play();
    });
  });
} //smooth-scroll


var scrollSmooth = new SmoothScroll('a[href*="#"]', {
  speed: 99,
  speedAsDuration: true
});

function hideBurger() {
  burger.classList.remove('active');
  header.classList.remove('active');
  body.classList.remove('stop-scroll');
}