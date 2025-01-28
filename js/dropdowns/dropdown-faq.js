// // Dropdown FAQ
// $(document).ready(function () {
//   $(".fx-title-FAQ").on("click", function () {
//     const parent = $(this).closest(".dropdown-FAQ");
//     parent.toggleClass("active");
//     parent.find(".content").slideToggle(200);
//   });
// });
$(document).ready(function () {
  $(".faq-title").click(function () {
    const index = $(this).data("index");

    $(this).toggleClass("active");

    $(`.faq-content[data-index=${index}]`).slideToggle(300);

    $(".faq-title").not(this).removeClass("active");
    $(".faq-content").not(`.faq-content[data-index=${index}]`).slideUp(300);
  });
});
