$(document).ready(function() {
  $('#menu-hidden').click(function() {
    // if( $('#nav-toggle').hasClass('active') ) {
    //   $('.responsive-menu').animate({right: '0px', opacity: '0.9'}, "fast");
    // }
    // else {
    //   $('.responsive-menu').animate({right: '-50px', opacity: '0.9'}, "fast");
    // }
    // $('.responsive-menu').toggleClass('expand');
    $('.responsive-menu').toggleClass('magictime slideUpRetourn');
    $('.responsive-menu').toggleClass('expand');
  });
});
