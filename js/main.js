'use strict'; //vh

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
}); //menu

var burger = document.querySelector('.btn--burger');
var header = document.querySelector('.header');
var body = document.body;
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('stop-scroll');
}); //

var portfolioPlay = document.querySelectorAll('.portfolio__play');
portfolioPlay.forEach(function (el) {
  el.addEventListener('click', function () {
    el.parentElement.classList.add('active');
    var currVideoPortfolio = new Vimeo.Player(el.parentElement.querySelector('iframe'));
    currVideoPortfolio.play();
  });
}); //smooth-scroll

var scrollSmooth = new SmoothScroll('a[href*="#"]', {
  speed: 99,
  speedAsDuration: true
});