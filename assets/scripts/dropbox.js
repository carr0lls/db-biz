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

	// Show/hide mobile nav menu
	$(".mobile-menu-btn").on('click', function() {
		event.preventDefault();
		$("#mobile-menu").slideToggle();
	});
	// Hide mobile menu if in desktop resolution
	$(window).on('resize', function(event) {
		if ($(window).width() > 1049) 
		{
			$("#mobile-menu").hide();
		}
	});

	// Image animations for Why Dropbox section
	imageAnimator();
	// Create new carousel by passing in carousel element
	carousel($('#business-page-carousel'));
});