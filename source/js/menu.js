const open = document.querySelector('.page-header__toggle');
const close = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav')

open.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.add('main-nav--opened');
};

close.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
});
