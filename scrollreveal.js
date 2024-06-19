document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.reveal-once', {
    distance: '10px',
    origin: 'top',
    duration: 1000,
    delay: 250,
    reset: false
  });
 
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    delay: 250,
    reset: true
  });
 
 
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
 
 
  function addFadeInClass() {
    const divHero = document.querySelector('.div-hero');
    if (isInViewport(divHero)) {
      divHero.classList.add('fade-in');
    }
  }
 
 
  function toggleBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
 
 
  window.addEventListener('scroll', function() {
    toggleBackToTopButton();
  });
 
 
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 
 
  addFadeInClass();
  toggleBackToTopButton();
});
 