function initializeProductDetails() {
  var slides = document.getElementsByClassName("slide");
  var prevBtn1 = document.getElementById("prevBtn");
  var nextBtn2 = document.getElementById("nextBtn");
  let slideIndex = 0;

  function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slide-active");
    }
    slides[slideIndex].classList.add("slide-active");
  }

  function prevSlide() {
    if (slideIndex > 0) {
      slideIndex--;
      showSlide(slideIndex);
    }
  }

  function nextSlide() {
    if (slideIndex < slides.length - 1) {
      slideIndex++;
      showSlide(slideIndex);
    }
  }

  if (prevBtn1 && nextBtn2) {
    prevBtn1.addEventListener("click", prevSlide);
    nextBtn2.addEventListener("click", nextSlide);
  }

  showSlide(slideIndex);

  function slideContainer() {
    const container = document.getElementById('sliderContainer');
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const currentPosition = container.scrollLeft;
    const newPosition = currentPosition + containerWidth;

    container.style.transition = 'scroll-left 0.5s ease-in-out';
    container.scrollLeft = newPosition;

    console.log(newPosition);
  }

  slideContainer();

  setInterval(slideContainer, 2000);
}

if (document.readyState !== 'loading') {
  initializeProductDetails();
} else {
  document.addEventListener('DOMContentLoaded', initializeProductDetails);
}
