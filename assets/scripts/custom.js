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
Trying TO Remove Stellar.JS on Mobile
 =====================================================*/
 // Not diabling on mobile
//     $(document).ready(function() {
//         react_to_window();
//     });
    
// // only activate stellar for window widths above or equal to 1024
//     var stellarActivated = false;
    
//     $(window).resize(function() {
//         react_to_window();
//     });
    
//     function react_to_window() {
//         if ($(window).width() <= 1024) {
//             if (stellarActivated == true) {
//                 $(window).data('plugin_stellar').destroy();
//                 stellarActivated = false;
//             }
//         } else {
//             if (stellarActivated == false) {

//                 $.stellar({
//                    horizontalScrolling: false
//                });
                
//                 $(window).data('plugin_stellar').init();
//                 stellarActivated = true;
//             }
//         }
//     };



// var isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };
// jQuery(document).ready(function(){
//     if( !isMobile.any() ){
//         $(window).stellar();
//     }
// });

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
 SCROLL REVEL SCRIPTS
 =====================================================*/
	var config = { mobile: false }

	window.scrollReveal = new scrollReveal();
	


});