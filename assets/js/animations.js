var listen_for_ipad_start = function() {
  var $ipad_block = $('#leader');
  var start_point = $ipad_block.offset().top - 400;
  var scroll_point = $(window).scrollTop();
  var scroll_handler = function() {
    scroll_point = $(window).scrollTop();
    if(scroll_point > start_point){
      ipad_animation();
      $(window).unbind("scroll", scroll_handler);
    }
  };
  $(window).scroll(scroll_handler);

};

var ipad_animation = function() {
  var $ipad_body = $('#ipad-body');

  $(window).resize(function(){
    $ipad_body.addClass('stage-4');
    $ipad_body.removeClass('stage-2 stage-3');
  });

  ipad_stage_2($ipad_body);
  ipad_stage_3($ipad_body);
  ipad_stage_4($ipad_body);
  ipad_stage_5($ipad_body);
  ipad_stage_6($ipad_body);

  setInterval(function(){
    ipad_stage_2($ipad_body);
    ipad_stage_3($ipad_body);
    ipad_stage_4($ipad_body);
    ipad_stage_5($ipad_body);
    ipad_stage_6($ipad_body);
  }, 8000);

};

var ipad_stage_2 = function($ipad_body) {
  $ipad_body.removeClass('stage-2 stage-3 stage-4 stage-5 stage-6');
  $ipad_body.addClass('stage-2');
};

var ipad_stage_3 = function($ipad_body) {
  setTimeout(function(){
    $ipad_body.addClass('stage-3');
  }, 4000);
};

var ipad_stage_4 = function($ipad_body) {
  setTimeout(function(){
    $ipad_body.addClass('stage-4');
  }, 6000);
};

var ipad_stage_5 = function($ipad_body) {
  setTimeout(function(){
    $ipad_body.addClass('stage-5');
  }, 6500);
};

var ipad_stage_6 = function($ipad_body) {
  setTimeout(function(){
    $ipad_body.addClass('stage-6');
  }, 7000);
};

var listen_for_macbook_start = function() {
  var $macbook_block = $('#songwriting');
  var start_point = $macbook_block.offset().top - 400;
  var scroll_point = $(window).scrollTop();
  var scroll_handler = function() {
    scroll_point = $(window).scrollTop();
    if(scroll_point > start_point){
      macbook_animation();
      $(window).unbind("scroll", scroll_handler);
    }
  };
  $(window).scroll(scroll_handler);

};

var macbook_animation = function () {
  var $macbook_body_1 = $('#macbook-body-1');
  var $macbook_body_2 = $('#macbook-body-2');
  var $macbook_body_3 = $('#macbook-body-3');
  var $macbooks = $('.macbook-body');

  $(window).resize(function(){
    $macbooks.addClass('no-animate');
    $macbooks.removeClass('disabled stage-2');
  });

  macbook_stage_2($macbook_body_1, $macbooks);
  macbook_stage_3($macbook_body_2);
  macbook_stage_4($macbook_body_2);
  macbook_stage_5($macbook_body_2);
  macbook_stage_6($macbook_body_3);
  macbook_stage_7($macbook_body_1);
  macbook_stage_8($macbooks);

  setInterval(function() {
    macbook_stage_2($macbook_body_1, $macbooks);
    macbook_stage_3($macbook_body_2);
    macbook_stage_4($macbook_body_2);
    macbook_stage_5($macbook_body_2);
    macbook_stage_6($macbook_body_3);
    macbook_stage_7($macbook_body_1);
    macbook_stage_8($macbooks);
  }, 13500);

};

var macbook_stage_2 = function($macbook_body_1, $macbooks) {
  $macbooks.removeClass('no-animate');
  setTimeout(function(){
    $macbook_body_1.addClass('disabled');
  }, 1000);
};

var macbook_stage_3 = function($macbook_body_2) {
  setTimeout(function(){
    $macbook_body_2.addClass('stage-2');
  }, 3000);
};

var macbook_stage_4 = function($macbook_body_2) {
  setTimeout(function(){
    $macbook_body_2.addClass('stage-3');
  }, 7000);
};

var macbook_stage_5 = function($macbook_body_2) {
  setTimeout(function(){
    $macbook_body_2.addClass('disabled');
  }, 7500);
};

var macbook_stage_6 = function($macbook_body_3) {
  setTimeout(function(){
    $macbook_body_3.addClass('disabled');
  }, 10500);
};

var macbook_stage_7 = function($macbook_body_1) {
  setTimeout(function(){
    $macbook_body_1.addClass('stage-2');
    $macbook_body_1.removeClass('disabled');
  }, 12000);
};

var macbook_stage_8 = function($macbooks) {
  setTimeout(function(){
    $macbooks.addClass('no-animate');
    $macbooks.removeClass('disabled stage-2 stage-3');
  }, 13000);
};

$(document).ready(function(){

  listen_for_ipad_start();
  listen_for_macbook_start();

});
