$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    focusOnSelect: true,
    arrows: false,
    asNavFor: ".slider-for",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 5,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          focusOnSelect: true,
        },
      },
    ],
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".center",
  });

  $(window).scroll(function () {
    // return how far is the about section from the top
    let aboutOffset = $("#about").offset().top;
    //return the top when i scroll
    let windowTop = $(window).scrollTop();
    // console.log(windowTop);

    if (windowTop >= aboutOffset - 50) {
      //-50 because i want the change to begin 50px before i go to the about section
      $("nav").removeClass("bg-transparent");
      $("nav").addClass("bg-dark");
    } else {
      $("nav").removeClass("bg-dark");
      $("nav").addClass("bg-transparent");
    }
  });

  $("#loading-screen .sk-folding-cube").fadeOut(2000, function () {
    $("#loading-screen").fadeOut(1000);
    $("body").css("overflow", "auto");
  });
});
