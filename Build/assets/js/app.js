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


	

});