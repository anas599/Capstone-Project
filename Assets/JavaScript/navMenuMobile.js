const heroSection = document.querySelector('.mainArt');
const productsListBlur = document.querySelector('.productsList');
const navIcon = document.querySelector('.navIcon i');
const dateBlur = document.querySelector('.dateLocation');

// eslint-disable-next-line no-unused-vars
function navMenuFun() {
  const navMenu = document.querySelector('.navMenu');
  navMenu.classList.toggle('show');

  if (navIcon.classList.contains('fa-bars')) {
    navIcon.classList.replace('fa-bars', 'fa-times');
    heroSection.style.filter = 'blur(15px)';
    productsListBlur.style.filter = 'blur(15px)';
    dateBlur.style.filter = 'blur(15px)';
  } else {
    navIcon.classList.replace('fa-times', 'fa-bars');
    heroSection.style.filter = 'blur(0px)';
    productsListBlur.style.filter = 'blur(0px)';
    dateBlur.style.filter = 'blur(0px)';
  }
}
