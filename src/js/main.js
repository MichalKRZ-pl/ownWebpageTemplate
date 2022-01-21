let $burgerBtn;
let $mobileMenu;
let $footerYear;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  $burgerBtn = document.querySelector(".header__burger");
  $mobileMenu = document.querySelector(".mobile");
  $footerYear = document.querySelector(".footer__year");
};

const prepareDOMEvents = () => {
  $burgerBtn.addEventListener("click", handleBurger);
  handleFooterYear();
};

const handleFooterYear = () => {
  const year = new Date().getFullYear();
  $footerYear.innerText = year;
};

const handleBurger = () => {
  $mobileMenu.classList.toggle("mobile--active");
};
document.addEventListener("DOMContentLoaded", main);
