// $(document).ready(function () {
// });

$(function () {
  $('.nav-lists li').on('click', function () {
    const targetIndex = $(this).index();
    const pagePosition = $('.nav-target').eq(targetIndex).offset().top;

    $('html, body').animate({ scrollTop: pagePosition }, 300);
  });
});
