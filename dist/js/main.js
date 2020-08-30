const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenuBar = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenuBar) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    showMenuBar = true;

  } else {
    hamBurger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    showMenuBar = false;
  }
}
