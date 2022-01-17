let $burgerBtn;
let $mobileMenu;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  $burgerBtn = document.querySelector(".header__burger");
  $mobileMenu = document.querySelector(".mobile");
};

const prepareDOMEvents = () => {
  $burgerBtn.addEventListener("click", handleBurger);
};

const handleBurger = () => {
  $mobileMenu.classList.toggle("mobile--active");
};
document.addEventListener("DOMContentLoaded", main);
