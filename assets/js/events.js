(function() {
  var events_nav_init;

  events_nav_init = function() {
    return $('#events-nav li a').each(function(num, el) {
      return $(el).click(function(e) {
        var nav_offset, target;
        e.preventDefault();
        target = $(el).attr('href');
        nav_offset = parseInt($('.navbar').css('height'));
        return $('html, body').animate({
          scrollTop: $(target).offset().top - nav_offset
        }, 1000);
      });
    });
  };

  $(function() {
    if ($('#events-home').length > 0) {
      return events_nav_init();
    }
  });

}).call(this);
