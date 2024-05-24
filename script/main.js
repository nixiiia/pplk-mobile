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

  $('.employees__slider').slick({
    swipe: true,
  });

  $('.products__slider').on('init', updateSlideClasses);
  $('.products__slider').on('afterChange', updateSlideClasses);
  $('.products__slider').slick('setPosition');
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const inputs = form.querySelectorAll('.form__input');
  const submitButton = document.getElementById('send-form');
  const sentModal = document.getElementById('modal-sent');

  form.addEventListener('submit', function (event) {
    let valid = true;

    inputs.forEach((input) => {
      const emptyError = input.nextElementSibling;
      if (input.type === 'checkbox' && !input.checked) {
        valid = false;
        input.classList.add('empty');
      } else if (input.value.trim() === '') {
        valid = false;
        input.classList.add('empty');
        if (emptyError && emptyError.classList.contains('form__par--empty')) {
          emptyError.style.display = 'block';
        }
      } else {
        input.classList.remove('empty');
        if (emptyError && emptyError.classList.contains('form__par--empty')) {
          emptyError.style.display = 'none';
        }
      }
    });

    if (!valid) {
      event.preventDefault();
    } else {
    }
  });

  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.classList.remove('empty');
        const emptyError = input.nextElementSibling;
        if (emptyError && emptyError.classList.contains('form__par--empty')) {
          emptyError.style.display = 'none';
        }
      }
    });
  });
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-window');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll('.open-modal');
  const closeModalBtn = document.querySelectorAll('.modal__close-btn');
  const modal = document.getElementById('modal-window');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      modal.classList.add('open');
    });
  });

  closeModalBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      modal.classList.remove('open');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
    }
  });
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
