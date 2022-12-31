
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const mobileMenuBodyRef = document.querySelector('[data-menu-is-open]');
const menuCloseBtnRef = document.querySelector('[data-menu-close-button]');
const menuLinks = document.querySelectorAll('.header__item');
function toggleMenu() {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');
  // mobileMenuBodyRef.classList.toggle('menu-is-open');
}
menuBtnRef.addEventListener('click', () => toggleMenu());
menuCloseBtnRef.addEventListener('click', ()=> toggleMenu());
menuLinks.forEach(item => {
  item.addEventListener('click', ()=> toggleMenu());
});

// SCROLL bg header

// let body = document.querySelector('body');
// let bodyClientHeight = body.scrollHeight;

// // console.log(body.getBoundingClientRect().top)
// console.log()
// window.addEventListener('scroll', () => {
//   console.log(document.documentElement.scrollTop)
// })
const scrollBg = document.querySelector('.header__bg-scroll');
$(document).ready(function () {
  let windowHeight = $(window).height();
  
  window.addEventListener("scroll", (evt) => {
    changeActiveNavPosition();
  })

  function changeActiveNavPosition() {

    let mainContentHeight = document.querySelector('body').offsetHeight - windowHeight;
    let windowScrollProcent = window.pageYOffset / mainContentHeight * 100;
   
   
    scrollBg.style.width = windowScrollProcent + "%";

  }
});

