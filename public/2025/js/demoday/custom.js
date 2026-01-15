

(function ($) {
  "use strict";
  $(document).ready(function () {
    headerStick(); 
  });

  function headerStick() {
    const burger = document.getElementById("burger");
    const ul = document.querySelector("nav ul.menu-list");

    burger.addEventListener("click", () => {
      burger.classList.toggle("show-x");
      if ($('.burger').hasClass('show-x')) {
        $('body').addClass('main-body');
      }
      else {
        $('body').removeClass('main-body');
      }
    });
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $('.themeHeader').addClass('fixed-header');
    }
    else {
      $('.themeHeader').removeClass('fixed-header');
    }
  });     
  

})(jQuery);  
