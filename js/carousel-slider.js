$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoWidth: true,
    nav: true,
    lazyLoad: true,
    autoplay: true,
    center: true,
    slideTransition: `ease`,
    smartSpeed: 500,
    autoplaySpeed: 3000,
    merge: true,
  });
});
