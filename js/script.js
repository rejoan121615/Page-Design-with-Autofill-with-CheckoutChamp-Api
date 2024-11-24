document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#customer-review-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
