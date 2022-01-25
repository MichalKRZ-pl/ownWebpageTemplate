$(".services__carousel-track").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  mobilefirst: true,
  autoplay: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },

    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },

    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
  ],
});

$(".services__carousel-btn--left").click(function () {
  $(".services__carousel-track").slick("slickPrev");
});

$(".services__carousel-btn--right").click(function () {
  $(".services__carousel-track").slick("slickNext");
});
