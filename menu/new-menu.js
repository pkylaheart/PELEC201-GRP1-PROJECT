new Swiper('.cards-menu-wrapper', {
  // Optional parameters
  loop: true,
  allowTouchMove: false,
  speed: 600,
  spaceBetween: 45,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
  },

});

const menuSwiper = new Swiper('.main-menu-carousel', {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    speed: 600,
    allowTouchMove: false,
    observer: true,
    observeParents: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

cardsSwiper.controller.control = menuSwiper;
menuSwiper.controller.control = cardsSwiper;

document.getElementById(".main-order-btn").addEventListener("click", function() {
    document.getElementById(".menu-order-btn").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});