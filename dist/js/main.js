const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenuBar = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenuBar) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    showMenuBar = true;

  } else {
    hamBurger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
  
    showMenuBar = false;
  }
}
