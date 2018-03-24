$(document).ready(function(){

	$('#emailForm').on('submit', function(e){
		e.preventDefault()
		// get the fields
		var name = $('#name').val()
		var email = $('#email').val()
		var message = $('#message').val()
		// ajax to formspree
		$.ajax({
			url: 'https://formspree.io/info@davidbasil.net',
			method: 'POST',
			data: {
				name: name,
				_replyto: email,
				email: email,
				message: message
			},
			dataType: "json",
			success: function(){
				console.log('sucess')
				$('#emailForm').hide()
				$('#thankYou').show()
			}
		})
	})

})
