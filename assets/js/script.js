// script.js
document.addEventListener('scroll', function() {
  const nav = document.querySelector('.sci-fi-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

