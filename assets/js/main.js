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
      if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight() + 100) > $(document).scrollTop()) {
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

// // cache the navigation links 
// var $navigationLinks = $('nav > ul > li > a');
// // cache (in reversed order) the sections
// var $sections = $($(".section-divider").get().reverse());

// // map each section id to their corresponding navigation link
// var sectionIdTonavigationLink = {};
// $sections.each(function() {
//     var id = $(this).attr('id');
//     sectionIdTonavigationLink[id] = $('nav > ul > li > a[href=\\#' + id + ']');
// });

// // throttle function, enforces a minimum time interval
// function throttle(fn, interval) {
//     var lastCall, timeoutId;
//     return function () {
//         var now = new Date().getTime();
//         if (lastCall && now < (lastCall + interval) ) {
//             // if we are inside the interval we wait
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(function () {
//                 lastCall = now;
//                 fn.call();
//             }, interval - (now - lastCall) );
//         } else {
//             // otherwise, we directly call the function 
//             lastCall = now;
//             fn.call();
//         }
//     };
// }

// function highlightNavigation() {
//     // get the current vertical position of the scroll bar
//     var scrollPosition = $(window).scrollTop();

//     // iterate the sections
//     $sections.each(function() {
//         var currentSection = $(this);
//         // get the position of the section
//         var sectionTop = currentSection.offset().top;

//         // if the user has scrolled over the top of the section  
//         if (scrollPosition >= sectionTop) {
//             // get the section id
//             var id = currentSection.attr('id');
//             // get the corresponding navigation link
//             var $navigationLink = sectionIdTonavigationLink[id];
//             // if the link is not active
//             if (!$navigationLink.hasClass('current')) {
//                 // remove .active class from all the links
//                 $navigationLinks.removeClass('current');
//                 // add .active class to the current link
//                 $navigationLink.addClass('current');
//             }
//             // we have found our section, so we return false to exit the each loop
//             return false;
//         }
//     });
// }

// $(window).scroll( throttle(highlightNavigation,100) );

// // if you don't want to throttle the function use this instead:
// // $(window).scroll( highlightNavigation );