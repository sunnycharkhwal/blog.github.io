/// some script

// jquery ready start
$(document).ready(function () {
  // jQuery code

  $("[data-trigger]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr("data-trigger");
    $(offcanvas_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
  });

  // Close menu when pressing ESC
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      $(".mobile-offcanvas").removeClass("show");
      $("body").removeClass("overlay-active");
    }
  });

  $(".btn-close, .screen-overlay").click(function (e) {
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
}); // jquery end

// footer
$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplaySpeed: 6000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});
// footer end
