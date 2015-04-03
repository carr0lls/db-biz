function imageAnimator() {
	var onDisplay = false;
	var topMarker, bottomMarker = 0;

	// Check initial screen for animates and bind event to scroller
	function initialize() {
		scanAnimates();
		$(window).on('scroll', checkScroll);
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
		var bottom = $(document).scrollTop() + $(window).height();		
		var wrapper = $('.imageAnimator');
		var targetTop = wrapper.offset().top;
		var targetBottom = targetTop + $(wrapper).outerHeight(true);

		if (targetTop > top && targetTop < bottom)
		{
			onDisplay = true;
			topMarker = top;
			bottomMarker = bottom;
		}
		else if (targetBottom > top && targetBottom < bottom)
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
				$(this).delay(timer).queue(function() {
					$(this).addClass('active');
				});
				timer += 250;
			});
			$(window).off('scroll', checkScroll);
		}
	}

	initialize();
}