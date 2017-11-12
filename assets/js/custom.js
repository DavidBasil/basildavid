$(document).ready(function() {
		// semantic ui
	$('body').transition({
		animation: 'fade in',
		duration: 1000
	})
	// modal
	$('#portfolioButton').on('click', function(){
			$('.ui.modal')
			.modal({
				'transition': 'horizontal flip'
			})
				.modal('show')
	})
	$('.ui.embed').embed()

		// contact form
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var message = $('#message').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/info@basildavid.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                message:message,
                _subject:'My Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#contact-form').hide(1000);
                $('#thankyouBlock').show(1000);
            }   

        });     
        
    });

}); 
