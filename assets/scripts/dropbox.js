$(document).ready(function() {

	$('#header .header-bg-image').animate({opacity: '1', backgroundPositionY: -98}, 3000);
    
    // Dropbox demo video player effects
	$('#dropbox-demo-video .play-btn').on('click', function() {
		$('#dropbox-demo-video .video-title').fadeOut();
		$(this).fadeOut();
		$('#dropbox-demo-video .video').fadeIn()[0].play();
	});

	$('#dropbox-demo-video .video').on('ended', function() {
		$(this).fadeOut();
		$('#dropbox-demo-video .play-btn').fadeIn();
		$('#dropbox-demo-video .video-title').fadeIn();
	});

});