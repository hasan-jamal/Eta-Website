$(document).ready(function () {
  $(".faq-item").click(function () {
    const index = $(this).find(".faq-title").data("index");

    $(this).toggleClass("active");

    $(`.faq-content[data-index=${index}]`).slideToggle(300);

    $(".faq-item").not(this).removeClass("active");
    $(".faq-content").not(`.faq-content[data-index=${index}]`).slideUp(300);
  });
});
