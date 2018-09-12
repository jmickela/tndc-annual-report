$(document).ready(function(){
  let $tooltip = $('.thrive__tooltip');

  $('.svg-tooltip').hover(
    function(event) {
      $tooltip.text($(this).attr('data-tooltip'));
      $tooltip.css('left', event.offsetX + 20);
      $tooltip.css('top', event.offsetY - 5);
      $tooltip.addClass('visible');
    },
    function () {
      $tooltip.removeClass('visible');
    });
});
