$(document).ready(function() {
  $('.responsive-menu').removeClass('expand');
  $('#menu-hidden').click(function() {
    $('.responsive-menu').toggleClass('slideUpRetourn slideUp');
    $('.responsive-menu').addClass('expand');
  });
});
