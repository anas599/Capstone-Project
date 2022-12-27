const heroSection = document.querySelector('.hero');
const navIcon = document.querySelector('.navIcon i');

// eslint-disable-next-line no-unused-vars
function navMenuFun() {
  const navMenu = document.querySelector('.navMenu');
  navMenu.classList.toggle('show');
  heroSection.style.filter = 'blur(0px)';

  if (navIcon.classList.contains('fa-bars')) {
    navIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    navIcon.classList.replace('fa-times', 'fa-bars');
  }
}
