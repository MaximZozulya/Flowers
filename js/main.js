const flowersSlider = new Swiper(".flowers-slider", {
  // параметры слайдера
  loop: true,
  slidesPerView: 6,

  // подключаем стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //настройки адаптивной версии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2,
    },
    // если браузер >= 480px
    480: {
      slidesPerView: 3,
    },
    // если браузер >= 992px
    992: {
      slidesPerView: 6,
    },
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // параметры слайдера
  loop: true,
  slidesPerView: 1,

  // подключаем стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
