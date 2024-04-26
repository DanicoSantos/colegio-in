$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoWidth: true,
    nav: true,
    lazyLoad: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    merge: true,
    animateOut: 'fadeOut',
  });
});
