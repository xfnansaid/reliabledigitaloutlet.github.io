/**
* Template Name: Yummy
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
// Particle Background
document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#00d2ff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#00d2ff', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    retina_detect: true
  });



  // AOS Animation Initialization
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var vid = document.querySelector('video');
    vid.play().catch(error => {
        console.error("Video can't autoplay: ", error.message);
        // Show a custom play button and/or message to users
    });
  });

  // script.js
document.addEventListener('DOMContentLoaded', () => {
  let slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      else if (index < 0) currentIndex = slides.length - 1;
      else currentIndex = index;

      slides.forEach(slide => {
          slide.style.transform = `translateX(-${100 * currentIndex}%)`;
      });
  }

  document.querySelector('.prev').addEventListener('click', () => {
      showSlide(currentIndex - 1);
  });

  document.querySelector('.next').addEventListener('click', () => {
      showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});


// cookie
document.addEventListener('DOMContentLoaded', function() {
  const cookieConsent = document.querySelector('.cookie-consent');
  const cookieButton = document.querySelector('.cookie-button');

  if (!getCookie('cookieConsent')) {
      cookieConsent.style.display = 'flex';
  }

  cookieButton.addEventListener('click', function() {
      setCookie('cookieConsent', 'true', 365);
      cookieConsent.style.display = 'none';
  });

  function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
});

// whatsapp emabeded
document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.querySelector('.chat-button');
  const chatPopup = document.querySelector('.chat-popup');
  const closeChatPopupButton = document.querySelector('.close-chat-popup');

  setTimeout(() => {
      chatButton.style.display = 'flex';
  }, 10000);

  chatButton.addEventListener('click', () => {
      chatPopup.style.display = 'flex';
  });

  closeChatPopupButton.addEventListener('click', () => {
      chatPopup.style.display = 'none';
  });
});

  // Brand Logo
// Initialize Swiper
const swiper = new Swiper('.brands-slider', {
  slidesPerView: 4, // Show 4 slides on desktop
  spaceBetween: 40, // More spacing for premium feel
  loop: true, // Infinite loop
  autoplay: {
    delay: 2500, // 2.5 seconds per slide
    disableOnInteraction: false, // Continue autoplay after interaction
  },
  speed: 800, // Smoother transitions
  parallax: true, // Enable parallax effect (optional, requires additional setup)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { // Mobile
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: { // Tablet
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: { // Desktop
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


/// Auto-play carousel functionality
const reelsContainer = document.querySelector('.reels-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to move to a specific reel
function moveToReel(index) {
  currentIndex = index;
  const reelWidth = reelsContainer.children[0].offsetWidth;
  reelsContainer.scrollTo({
    left: reelWidth * index,
    behavior: 'smooth'
  });
  updateDots();
}

// Function to update active dot
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Auto-play every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  moveToReel(currentIndex);
}, 5000);

// Dot click event listeners
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToReel(index);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true, // Enables infinite scrolling
    autoplay: {
      delay: 8000, // 8 seconds per slide
      disableOnInteraction: false, // Continues autoplay after manual navigation
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Allows users to click on dots to navigate
    },
    effect: "fade", // Optional: Adds a smooth fade effect
    speed: 800, // Transition speed (0.8 sec)
  });
});


document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.hero-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: { delay: 5000 }, // Auto-slide every 5 seconds
    breakpoints: {
      1024: { height: 500 },
      768: { height: 400 },
      320: { height: 300 },
    },
  });
});

AOS.init();

    document.addEventListener('DOMContentLoaded', function () {
      const keyPoints = document.querySelectorAll('.key-points li');
      let currentIndex = 0;
      let animationRunning = true;

      function animatePoints() {
        keyPoints.forEach((point, index) => {
          point.style.opacity = 0; // Reset opacity
          point.classList.remove('active');
        });

        function showNextPoint() {
          if (!animationRunning) return;

          if (currentIndex < keyPoints.length) {
            keyPoints[currentIndex].style.opacity = 1;
            keyPoints[currentIndex].classList.add('active');
            currentIndex++;
            setTimeout(showNextPoint, 2000); // 2 seconds per point
          } else {
            currentIndex = 0; // Loop back to start
            setTimeout(showNextPoint, 2000); // Pause before restarting
          }
        }

        showNextPoint();
      }

      // Start the animation
      animatePoints();

      // Optional: Stop the animation after 15 seconds
      setTimeout(() => {
        animationRunning = false;
        keyPoints.forEach(point => {
          point.style.opacity = 1; // Ensure all points are visible when animation stops
          point.classList.remove('active');
        });
      }, 15000); // Stop after 15 seconds
    });

    
    
})();
