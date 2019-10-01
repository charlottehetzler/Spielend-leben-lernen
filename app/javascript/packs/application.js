import "bootstrap";

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar');

    if (scrollPos > 500) {
      navbar.addClass('visible');
    } else {
      navbar.removeClass('visible');
    }
  });
});
