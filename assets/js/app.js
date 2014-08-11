$(document).ready(function(){
  
	// Write your Javascript!

	// set device types
	set_device_type();

  	// turn on parallax
	turn_on_parallax();

	listen_for_resize();

	device_width();
	
	colorbox_iphone();


	
	$("a.youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  

	// $("#core-instructors-button").click(function(){
	// 	$("#core-instructors").show();
	// 	$("#music-instructors").hide();

 //  	});

  	$("#music-instructors-button").click(function(){
		$("#music-instructors").show();
		// $("#music-instructors").fadeIn(200);
		$("#core-instructors").hide();
		// $("#core-instructors").fadeOut(300);	
		
		$("#music-instructors-button .music-nav-box2").removeClass("off").addClass("on");

		$("#core-instructors-button .core-nav-box1").removeClass("on").addClass("off");

		$("#music-instructors-button .arrow-down").show();

		$("#core-instructors-button .arrow-down").hide();
		


  	});

  	$("#core-instructors-button").click(function(){
		$("#music-instructors").hide();
		// $("#core-instructors").fadeIn(200);
		$("#core-instructors").show();
		// $("#music-instructors").fadeOut(300);

		$("#music-instructors-button .music-nav-box2").removeClass("on").addClass("off");

		$("#core-instructors-button .core-nav-box1").removeClass("off").addClass("on");

		$("#core-instructors-button .arrow-down").show();

		$("#music-instructors-button .arrow-down").hide();

  	});

  	window.map_has_arrived = false;


	// Returns true if the specified element has been scrolled into the viewport.
	function isElementInViewport(elem) {
	    var $elem = $(elem);

	    // Get the scroll position of the page.
	    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	    var viewportTop = $(scrollElem).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();

	    // Get the position of the element on the page.
	    var elemTop = Math.round( $elem.offset().top );
	    var elemBottom = elemTop + $elem.height();

	    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));

	}

	// Check if it's time to start the animation.
	function checkAnimation() {
	    var $elem = $('.map');

	    if (isElementInViewport($elem)) {
	    	if (window.map_has_arrived == false){
	    		window.map_has_arrived = true;
		        // Start the animation
		        window.studentTimeout1 = window.setTimeout(function(){$(".student1").removeClass("student-hidden").addClass("student-active");}, 500);
				
				window.studentTimeout2 = window.setTimeout(function(){$(".student2").removeClass("student-hidden").addClass("student-active");}, 1000);
				
				window.studentTimeout3 = window.setTimeout(function(){$(".student3").removeClass("student-hidden").addClass("student-active");}, 1500);
				
				window.studentTimeout4 = window.setTimeout(function(){$(".student4").removeClass("student-hidden").addClass("student-active");}, 2000);
			}
	    }

	    else {
	    	if (window.map_has_arrived == true) {
	    		window.map_has_arrived = false;
		    	window.clearTimeout(window.studentTimeout1);
		    	window.clearTimeout(window.studentTimeout2);
		    	window.clearTimeout(window.studentTimeout3);
		    	window.clearTimeout(window.studentTimeout4);
		    	$('.student1, .student2, .student3, .student4').addClass('student-hidden').removeClass('student-active');
		    }	    	
    	}
	}

	// Capture scroll events
	$(window).scroll(function(){
		if ($('#home-page').length > 0){
	    checkAnimation();
	  }
	});




	// instructor animations

	window.instructors_has_arrived = false;

	function checkinstructorsAnimation() {
	    var $elem = $('#instructors');

	    if (isElementInViewport($elem)) {
	    	if (window.instructors_has_arrived == false){
	    		window.instructors_has_arrived = true;
		        // Start the animation
		        window.instructorsTimeout1 = window.setTimeout(function(){$("#instructors-img1").removeClass("instructors-hidden").addClass("instructors-active");}, 500);
				
				window.instructorsTimeout2 = window.setTimeout(function(){$("#instructors-img2").removeClass("instructors-hidden").addClass("instructors-active");}, 1100);
				
				window.instructorsTimeout3 = window.setTimeout(function(){$("#instructors-img3").removeClass("instructors-hidden").addClass("instructors-active");}, 1700);
				
			}
	    }

	    else {
	    	if (window.instructors_has_arrived == true) {
	    		window.instructors_has_arrived = false;
		    	window.clearTimeout(window.instructorsTimeout1);
		    	window.clearTimeout(window.instructorsTimeout2);
		    	window.clearTimeout(window.instructorsTimeout3);
		    	$('.instructors-img').addClass('instructors-hidden').removeClass('instructors-active');
		    }	    	
    	}
	}

	// Capture scroll events
	$(window).scroll(function(){
		if ($('#home-page').length > 0){
	    checkinstructorsAnimation();
	  }
	});


});