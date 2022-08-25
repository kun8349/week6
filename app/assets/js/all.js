// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});