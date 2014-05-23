// returns true if device is ipad
function is_ipad() {
  return (/iPad/).test(navigator.userAgent);
}

// returns true if device is iphone
function is_iphone() {
  return (/iPhone/).test(navigator.userAgent);
}

function to_be_parallaxed() {
  return $("body").hasClass("parallax_me");
}

// adds classes to body to handle device types
function set_device_type() {
  // add class 'ipad' to body if ipad
  if (is_ipad()) {
    $("body").addClass("ipad");
  }
  // add class 'iphone' to body if iphone
  else if (is_iphone()) {
    $("body").addClass("iphone");
  }
  // else add class 'parallax_me' and parallax all the things
  else {
    $("body").addClass("parallax_me");
  }
}

function listen_for_resize(){
  $(window).resize(function(){
    if (to_be_parallaxed()){
      $.stellar();
    }
    colorbox_iphone();
  });    

}

function turn_on_parallax() {
  // turn on parallax if 'parallax_me' class exists
  if (to_be_parallaxed()) {
    $.stellar();
  }
}

function device_width() {
  return $(window).width()
}

function colorbox_iphone() {
  if (is_iphone()) {
    $("a.youtube").colorbox({iframe:true, width:"100%", height:"60%"});
  }

  if (is_iphone() && device_width() > 320) {
    $("a.youtube").colorbox({iframe:true, width:"80%", height:"80%"});
  }

}
