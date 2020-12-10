$(document).ready(function() {
    $("#cf7_controls").on('mouseover', 'li', function() {
        $("#cf7 img").removeClass("opaque");
        
        var newImage = $(this).index();
        
        $("#cf7 img").eq(newImage).addClass("opaque")

        $("#cf7_controls").removeClass("selected");
        $(this).addClass("selected");
    });
});

$(function () {
    $(document).scroll(function () {
      var top =	 window.pageYOffset || document.documentElement.scrollTop;
      if (top > 100) {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        document.getElementById("navbar-logo").src = "assets/images/logo2.svg";
      } 
      else {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        document.getElementById("navbar-logo").src = "assets/images/logo1.png";
      }
    });
  });

// $('#products-link').on('click', function() {
//   $('#products-section').scrollIntoView();
// })

$(window).scroll(function () {
  $('.section-divider').each(function () {
    if($(window).scrollTop() >= $(this).offset().top) {
        var currentSection = $(this).attr('id');
        if(currentSection == 'homepage-section') {
          document.getElementById("homepage-link").classList.add("current");
          document.getElementById("products-link").classList.remove("current");
          document.getElementById("investors-link").classList.remove("current");
          document.getElementById("about-us-link").classList.remove("current");
        }  
        else if(currentSection == 'products-section') {
          document.getElementById("homepage-link").classList.remove("current");
          document.getElementById("products-link").classList.add("current");
          document.getElementById("investors-link").classList.remove("current");
          document.getElementById("about-us-link").classList.remove("current");
        }
        else if(currentSection == 'investors-section') {
          document.getElementById("homepage-link").classList.remove("current");
          document.getElementById("products-link").classList.remove("current");
          document.getElementById("investors-link").classList.add("current");
          document.getElementById("about-us-link").classList.remove("current");
        }
        else if(currentSection == 'about-us-section') {
          document.getElementById("homepage-link").classList.remove("current");
          document.getElementById("products-link").classList.remove("current");
          document.getElementById("investors-link").classList.remove("current");
          document.getElementById("about-us-link").classList.add("current");
        }
      }
  });
})

// $('nav a').on('click', function(event) {
//   $(this).parent().find('a').removeClass('current');
//   $(this).addClass('current');
// });

// $(window).on('scroll', function() {
//   $('.section-divider').each(function() {
//       if($(window).scrollTop() >= $(this).position().top) {
//           var id = $(this).attr('id');
//           $('nav a').removeClass('current');
//           $('nav a[href=#'+ id +']').addClass('current');
//       }
//   });
// });