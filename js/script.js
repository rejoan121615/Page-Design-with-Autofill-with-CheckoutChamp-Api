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

  // accordion
  const accordionElement = document.querySelector(".accordion");
  if (accordionElement) {
    const accordionHead = accordionElement.querySelector(".accordion-head");
    const accordionBody = accordionElement.querySelector(".accordion-body");
    const accordionBtn = accordionHead.querySelector("button");

    if (window.innerWidth >= 1280) {
      accordionElement.classList.add("show");
    } else {
      accordionBtn.addEventListener("click", function () {
        accordionElement.classList.toggle("show");
      });
    }
  }
});
