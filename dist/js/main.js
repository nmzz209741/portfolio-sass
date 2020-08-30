const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');

let showMenuBar = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenuBar) {
    hamBurger.classList.add('open');
    showMenuBar = true;

  } else {
    hamBurger.classList.remove('open');
    showMenuBar = false;
  }
}
