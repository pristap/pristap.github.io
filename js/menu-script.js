$(document).ready(function() {
  $('#menu-hidden').click(function() {
    $('.responsive-menu').toggleClass('expand');
    $('.page-content').toggleClass('hide-content');
    $('#content').toggleClass('hide-content');
    $('.site-footer').toggleClass('hide-content');
    $('.responsive-menu').animate({top: '70px', opacity: '0.8'}, "slow");
  });
});
