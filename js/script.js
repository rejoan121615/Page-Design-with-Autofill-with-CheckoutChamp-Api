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

  new Swiper("#customer-review-slider", configration);
  new Swiper("#review-slider-sm", configration);

  // accordion
  const accordionElement = document.querySelector(".accordion");
  const accordionHead = accordionElement.querySelector(".accordion-head");
  const accordionBody = accordionElement.querySelector(".accordion-body");
  var bodyHeight = accordionBody.offsetHeight;


  function RegisterAccordion() {
    if (accordionElement) {
      const accordionBtn = accordionHead.querySelector("button");

      if (window.innerWidth >= 1280) {
        accordionElement.classList.add("show");
      } else {
        accordionBtn.addEventListener("click", function () {
          accordionElement.classList.toggle("show");
        });
      }
    }
  }

  RegisterAccordion();

  window.addEventListener("resize", RegisterAccordion);

  // reverse timer 
  let totalSeconds = 14 * 60 + 58; 

  function updateTimer() {
    const bookingTimer = document.querySelector("#booking-timer");
    const hoursElement = bookingTimer.querySelector('.hours h2');
    const minutesElement = bookingTimer.querySelector('.munis h2');
    const secondsElement = bookingTimer.querySelector('.secs h2');

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
    }

    totalSeconds--;
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();


});
