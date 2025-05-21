//  End Slider 4
$(document).ready(function () {
  $(".fxSectionLogos").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 6,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1289,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 878,
        settings: {
          slidesToShow: 4.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3.2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  });
});
//  End Slider 4
