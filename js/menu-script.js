$(document).ready(function() {
  $('#menu-hidden').click(function() {
    $('.responsive-menu').toggleClass('expand');
    $('.page-content').toggleClass('hide-content');
    $('.site-footer').toggleClass('hide-content');
  });
});
