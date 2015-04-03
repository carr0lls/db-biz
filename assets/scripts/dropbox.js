$(document).ready(function() {
    
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

	// Image animations for Why Dropbox section
	imageAnimator();
	// Create new carousel by passing in carousel element
	carousel($('#business-page-carousel'));
});