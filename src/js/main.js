//burger button variables
let $burgerBtn;
let $mobileMenu;

//footer related variables
let $footerYear;

//carousel in services section related variables
let $carousel;
let $carouselSlides;
let $carouselLeftBtn;
let $carouselRightBtn;
let $slideWidth;
let $dotControls;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  $burgerBtn = document.querySelector(".header__burger");
  $mobileMenu = document.querySelector(".mobile");
  $footerYear = document.querySelector(".footer__year");
  $carousel = document.querySelector(".services__carousel-track");
  $carouselSlides = Array.from($carousel.children);
  $carouselLeftBtn = document.querySelector(".services__carousel-btn--left");
  $carouselRightBtn = document.querySelector(".services__carousel-btn--right");
  $slideWidth = $carouselSlides[0].getBoundingClientRect().width;
  $dotControls = document.querySelectorAll(".services__dot");
};

const prepareDOMEvents = () => {
  $burgerBtn.addEventListener("click", handleBurger);
  handleFooterYear();
  //console.log($carouselSlides);
  prepareCarousel();
  $carouselRightBtn.addEventListener("click", handleRightBtn);
  $carouselLeftBtn.addEventListener("click", handleLeftBtn);
  $dotControls.forEach((indicator) => {
    indicator.addEventListener("click", handleCarouselDotControls);
  });
};

const handleCarouselDotControls = (e) => {
  const currentSlide = $carousel.querySelector(".services__card--current");
  const currentDot = document.querySelector(".services__dot--current");
  const targetIndex = Array.from($dotControls).findIndex((dot) => dot === e.target);
  const targetSlide = $carouselSlides[targetIndex];

  moveToNextSlide(currentSlide, targetSlide);
  moveToNextDot(currentDot, $dotControls[targetIndex]);
};

const moveToNextSlide = (currentSlide, nextSlide) => {
  $carousel.style.transform = `translateX(-${nextSlide.style.left})`;
  currentSlide.classList.remove("services__card--current");
  nextSlide.classList.add("services__card--current");
};
const moveToNextDot = (currentDot, nextDot) => {
  currentDot.classList.remove("services__dot--current");
  nextDot.classList.add("services__dot--current");
};

const handleRightBtn = () => {
  const currentSlide = document.querySelector(".services__card--current");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = document.querySelector(".services__dot--current");
  const nextDot = currentDot.nextElementSibling;
  moveToNextSlide(currentSlide, nextSlide);
  moveToNextDot(currentDot, nextDot);
};

const handleLeftBtn = () => {
  const currentSlide = document.querySelector(".services__card--current");
  const nextSlide = currentSlide.previousElementSibling;
  const currentDot = document.querySelector(".services__dot--current");
  const nextDot = currentDot.previousElementSibling;
  moveToNextSlide(currentSlide, nextSlide);
  moveToNextDot(currentDot, nextDot);
};

const setSlidePosition = (slide, index) => {
  slide.style.left = $slideWidth * index + "px";
};

const prepareCarousel = () => {
  $carouselSlides.forEach(setSlidePosition);
};

const handleFooterYear = () => {
  const year = new Date().getFullYear();
  $footerYear.innerText = year;
};

const handleBurger = () => {
  $mobileMenu.classList.toggle("mobile--active");
};
document.addEventListener("DOMContentLoaded", main);
