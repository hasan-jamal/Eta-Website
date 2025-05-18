//  End Slider 4
$(document).ready(function () {
  $(".fxSectionLogos").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 8,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 4
