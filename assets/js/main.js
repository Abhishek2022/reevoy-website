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
