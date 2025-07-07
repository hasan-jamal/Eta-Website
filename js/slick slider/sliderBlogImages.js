$(document).ready(function () {
  $(".sliderImagesBlog").slick({
    prevArrow: $(".arrow-sliderImgLeft"),
    nextArrow: $(".arrow-sliderImgRight"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
  });
});
