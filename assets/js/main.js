$(document).ready(function() {
    $("#cf7_controls").on('mouseover', 'li', function() {
        $("#cf7 img").removeClass("opaque");
        
        var newImage = $(this).index();
        
        $("#cf7 img").eq(newImage).addClass("opaque");
        // $("#cf7 img").eq(newImage).slideUp();

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