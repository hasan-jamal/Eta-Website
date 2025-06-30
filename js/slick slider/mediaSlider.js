$(document).ready(function () {
  if (
    !$(".sliderMedia").hasClass("slick-initialized") &&
    !$(".sliderMedia2").hasClass("slick-initialized")
  ) {
    $(".sliderMedia").slick({
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 3.7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3.7,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2.7,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            centerMode: false,
            centerPadding: "0px",
          },
        },
      ],
    });
    $(".sliderMedia2").slick({
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 3.7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3.4,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2.7,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  $("#galleryTab").click(function () {
    $(".contantGallery").show();
    $(".contantVideos").hide();

    $("#galleryTab").addClass("active");
    $("#videoTab").removeClass("active");

    if (
      !$(".sliderMedia").hasClass("slick-initialized") &&
      !$(".sliderMedia2").hasClass("slick-initialized")
    ) {
      $(".sliderMedia").slick({
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3.7,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2.7,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5,
              centerMode: false,
              centerPadding: "0px",
            },
          },
        ],
      });
      $(".sliderMedia2").slick({
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3.4,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2.7,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.4,
            },
          },
        ],
      });
    }
  });

  $("#videoTab").click(function () {
    $(".contantGallery").hide();
    $(".contantVideos").show();

    $("#videoTab").addClass("active");
    $("#galleryTab").removeClass("active");

    if (!$(".sliderVideos").hasClass("slick-initialized")) {
      $(".sliderVideos").slick({
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8500,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 1.7,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  });
});
