document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slideshow-image");
    let currentIndex = 0;
  
    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }
  
    // Initialize the first slide
    slides[currentIndex].classList.add("active");
  
    // Change slides every 3 seconds
    setInterval(showNextSlide, 3000);
  });