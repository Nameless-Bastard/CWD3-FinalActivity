$(document).ready(function() {
  $('.containerMenu').click(function() {
    $('.items').toggleClass("show");
    $('ul li').toggleClass("hide");
  });
});

function menuFunction(x) {
  x.classList.toggle("change");
}
