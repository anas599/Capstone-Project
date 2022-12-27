const observer = new IntersectionObserver((entries) => {
  entries.forEach((x) => {
    if (x.isIntersecting) {
      x.target.classList.add('scrollShow');
    } else {
      x.target.classList.remove('scrollShow');
    }
  });
});
const hiddenElements = document.querySelectorAll('.scroll');
hiddenElements.forEach((el) => observer.observe(el));