document.addEventListener("DOMContentLoaded", function () {
  const configration = {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  };


  const LargeSlider = new Swiper("#customer-review-slider", configration);
  const SmallSlider = new Swiper("#review-slider-sm", configration);
});
