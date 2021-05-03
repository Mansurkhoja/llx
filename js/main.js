'use strict'; //vh

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
}); //swiper video init

var introVideo = new Swiper('.intro__slider', {
  slidesPerView: 1,
  speed: 599,
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
  resizeObserver: true,
  watchActiveIndex: true,
  watchSlidesVisibility: true,
  touchAngle: 30,
  touchRatio: 1,
  preventInteractionOnTransition: true,
  autoplay: true
});
introVideo.on('slideChange', function () {
  if (introVideo.isEnd) {
    introVideo.autoplay.stop();
  }
}); // var introActiveSlide = introVideo.el.querySelector('.swiper-slide-active'),
// 	introActiveVideo = introActiveSlide.querySelectorAll('video');
// introActiveVideo.addEventListener('ended', (e) => {
// 	introVideo.slideNext();
// });
//menu

var burger = document.querySelector('.btn--burger');
var header = document.querySelector('.header');
var body = document.body;
burger.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('stop-scroll');
}); //

var portfolioPlay = document.querySelectorAll('.portfolio__play'); //const as =document.querySelector('.ssa');
// var playersa = new Vimeo.Player(as);
// console.log(as);

portfolioPlay.forEach(function (el) {
  el.addEventListener('click', function () {
    el.parentElement.classList.add('active');
    var currVideoPortfolio = new Vimeo.Player(el.parentElement.querySelector('iframe'));
    currVideoPortfolio.play();
  });
});