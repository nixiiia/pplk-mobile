$(document).ready(function () {
  $('.products__slider').slick({
    swipe: true,
    centerMode: true,
    dots: true,
    centerPadding: '102px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '102px',
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.employees__slider').slick({
    swipe: true,
  });
});

const menuBtn = document.getElementById('menu-btn');

const menu = document.getElementById('menu-window');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

const openModalBtns = document.querySelectorAll('.open-modal');

const closeModalBtn = document.getElementById('close-modal');

const modal = document.getElementById('modal-window');

const modalInner = document.querySelector('.modal__inner');

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    modal.classList.add('open');
  });
});

closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('open');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('open');
  }
});

const btns = document.querySelectorAll('.subdivisions__btn--more');

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const descr = document.getElementById(targetId);
    if (descr) {
      descr.classList.toggle('hide-text');
    }
  });
});

const updateSlideClasses = () => {
  const slides = document.querySelectorAll('.slick-slide');
  slides.forEach((slide) => {
    slide.classList.remove('slick-left', 'slick-right');
  });
  const centerSlide = document.querySelector('.slick-center');
  if (centerSlide) {
    const prevSlide = centerSlide.previousElementSibling;
    const nextSlide = centerSlide.nextElementSibling;
    if (prevSlide) prevSlide.classList.add('slick-left');
    if (nextSlide) nextSlide.classList.add('slick-right');
  }
};

$('.products__slider').on('init', updateSlideClasses);
$('.products__slider').on('afterChange', updateSlideClasses);
$('.products__slider').slick('setPosition');

function init() {
  let map = new ymaps.Map('map', {
    center: [],
    zoom: 15,
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
}

ymaps.ready(init);
