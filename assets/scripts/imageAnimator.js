function imageAnimator() {
	var onDisplay = false;
	var topMarker, bottomMarker = 0;

	// Check initial screen for animates and bind event to scroller
	function initialize() {
		scanAnimates();
		window.addEventListener('scroll', checkScroll);
	}

	function checkScroll() {
		// Show animation after 200px vertical scroll if found
		if (onDisplay)
		{
			activateAnimation();
		}
		// Scan screen for animates
		else
		{
			scanAnimates();
		}
	}	

	function scanAnimates() {
		var top = $(document).scrollTop();
		var wrapper = $('.animate-image-wrapper');
		var target = wrapper.offset().top + (wrapper.height() / 2);
		var bottom = $(document).scrollTop() + $(window).height();
		if (target > top && target < bottom)
		{
			onDisplay = true;
			topMarker = top;
			bottomMarker = bottom;
		}
	}

	function activateAnimation () {
		var top = $(document).scrollTop();
		var bottom = $(document).scrollTop() + $(window).height();
		if (top >= topMarker + 200 || bottom <= bottomMarker - 200)
		{
			// Show animates with overlapping timeline effect
			var timer = 0;
			$('.animate-image').each(function() {
				$(this).delay(timer).show(0);
				timer += 250;
			});
			window.removeEventListener('scroll', checkScroll);
		}
	}

	initialize();
}