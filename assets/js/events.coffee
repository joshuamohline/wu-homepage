events_nav_init = ->
  $('#events-nav li a').each (num, el) ->
    $(el).click (e) ->
      e.preventDefault()
      target = $(el).attr('href')
      nav_offset = parseInt $('.navbar').css('height')

      $('html, body').animate
        scrollTop: $(target).offset().top - nav_offset
      , 1000

$ ->
  if $('#events-home').length > 0
    events_nav_init()
