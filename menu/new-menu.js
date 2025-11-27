new Swiper('.cards-menu-wrapper', {
  // Optional parameters
  loop: true,
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

document.getElementById(".main-order-btn").addEventListener("click", function() {
    document.getElementById(".menu-order-btn").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});