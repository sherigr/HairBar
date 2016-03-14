jQuery(function ($) {

    /*=============================================================
     Authour URI: www.binarytheme.com
     License: Commons Attribution 3.0
 
     http://creativecommons.org/licenses/by/3.0/
 
     100% To use For Personal And Commercial Use.
     IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
    
     ========================================================  */

    /*==========================================
    GENERAL CUSTOM SCRIPTS
    =====================================================*/

    //  HEADER SLIDE /CAROUSEL SECTION FUNCTION 
	$(function(){
		$('#slide-head.carousel').carousel({
			interval: 2000,
			pause: false
		});
	});

    // COLLAPSE NAVBAR WHEN LINK IS CLICKED
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

	

    // LINKS SCROLLING FUNCTION 
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	
    // PRETTYPHOTO FUNCTION 
	$("a.preview").prettyPhoto({
		social_tools: false
	});

/*==========================================
Stellar.js 
 =====================================================*/
 $(function(){
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 40
            });
        });


/*==========================================
GOOGLE MAP
 =====================================================*/
$(document).ready(function() {
    $('#map').click(function () {
        $('#map iframe').css("pointer-events", "auto");
    });
    
    $( "#map" ).mouseleave(function() {
      $('#map iframe').css("pointer-events", "none"); 
    });
 });


/*==========================================
 SCROLL REVEAL SCRIPTS
 =====================================================*/
	var config = { mobile: false }

	window.scrollReveal = new scrollReveal();

    /*==========================================
    FOOTER
  =====================================================*/

  var today = new Date();
  var year = today.getFullYear();

   $('#footer').html('<p>&copy' + year + ' the hair and color bar</p>');



});