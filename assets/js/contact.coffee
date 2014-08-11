alert_box = (message) ->
  html = '<div class="alert alert-danger">' +
            '<button aria-hidden="true" class="close" data-dismiss="alert" type="button">×</button>' +
            "<div id=\"flash_error\">#{message}</div>" +
          '</div>'
  $('section').prepend(html)
  $('html, body').animate scrollTop: '0px'

contact_submit = ->
	$('#contact-page form').submit ->
		if $('#inputName').val() == "" or $('#inputEmail3').val() == "" or $('#inputTopic').val() == "" or $('#inputSubject').val() == "" or $('#inputBody').val() == ""
			alert_box 'Please fill out all fields.'
			return false
		else
			return true

handle_redirect = ->
	url = window.location.origin + window.location.pathname
	url += "?thanks=true"
	$('#next').val(url)

is_success = ->
	query = window.location.search.substring(1)
	raw_vars = query.split "&"
	params = {}
	for v in raw_vars
		[key, val] = v.split "="
		params[key] = decodeURIComponent val

	if params["thanks"] == "true"
		$('#thanks').removeClass 'hidden'

$ ->
	if $('#contact-page').length > 0
		contact_submit()
		handle_redirect()
		is_success()