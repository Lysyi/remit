$('.eject-button').click(function(event){
	event.preventDefault();
	if($('.multimedia-block').css('height') > '1px') {
	    $('.multimedia-block').animate({height : '0px'}, 500);
	}
	else {
	    $('.multimedia-block').animate({height : '40px'},  500);
	}
});