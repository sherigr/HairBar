jQuery(function ($) {


    //  HEADER SLIDE /CAROUSEL SECTION FUNCTION 
	$('#slide-head.carousel').carousel({
		interval: 2000,
		pause: false
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
    STELLAR.js 
 ================================================*/
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });


  /*==========================================
    GOOGLE MAP
 ===================================================*/
    $('#map').click(function () {
        $('#map iframe').css("pointer-events", "auto");
    });

    $( "#map" ).mouseleave(function() {
      $('#map iframe').css("pointer-events", "none"); 
    });

/*==========================================
    SCROLL REVEAL
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

