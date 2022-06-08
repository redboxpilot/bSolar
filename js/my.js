$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("bg-dark");
  } else {
    $("nav").removeClass("bg-dark");
  }
});
