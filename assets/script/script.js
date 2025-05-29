// HTML-CSS-JS Sample Site by mrKevler
document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML-CSS-JS Sample Site initialized successfully");

  // Generate current year in footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  // Slider functionality
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  const totalSlides = slides.length;

  // Initialize slider
  function initializeSlider() {
    showSlide(currentSlideIndex);
    startAutoSlide();
  }

  // Show specific slide
  function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Add active class to current slide and indicator
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  // Change slide function
  function changeSlide(direction) {
    currentSlideIndex += direction;

    // Loop back to beginning or end
    if (currentSlideIndex >= totalSlides) {
      currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
      currentSlideIndex = totalSlides - 1;
    }

    showSlide(currentSlideIndex);
    resetAutoSlide();
  }

  // Go to specific slide
  function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
  }

  // Auto slide functionality
  let autoSlideInterval;

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000); // Change slide every 5 seconds
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Make functions globally accessible
  window.changeSlide = changeSlide;
  window.currentSlide = currentSlide;

  // Initialize slider when page loads
  initializeSlider();

  // Pause auto-slide on hover
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Keyboard navigation for slider
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      changeSlide(-1);
    } else if (event.key === "ArrowRight") {
      changeSlide(1);
    }
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].screenX;
  });

  sliderContainer.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        changeSlide(-1); // Swipe right - previous slide
      } else {
        changeSlide(1); // Swipe left - next slide
      }
    }
  }

  // Smooth scrolling function for CTA buttons and navigation
  function scrollToSection(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Make scrollToSection globally accessible
  window.scrollToSection = scrollToSection;

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      scrollToSection(targetId);
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.boxShadow = "0 4px 25px rgba(30, 136, 229, 0.3)";
      header.style.transform = "translateY(-2px)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(30, 136, 229, 0.2)";
      header.style.transform = "translateY(0)";
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe content sections for fade-in animation
  document
    .querySelectorAll(".content-section, .features-section")
    .forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(40px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(section);
    });

  // Performance optimization - lazy load background images if needed
  function optimizeImages() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.style.willChange = "opacity";
    });
  }

  optimizeImages();

  // Console log for development
  console.log("HTML-CSS-JS Sample Site initialized successfully");
  console.log(`Total slides: ${totalSlides}`);
});
