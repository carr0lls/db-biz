function carousel(target) {
	var slides = target.find(".image");
	var navigation = target.find("div.navigation");
	var leftArrow = target.find(".left-arrow");
	var rightArrow = target.find(".right-arrow");
	var activeSlideIndex = 0;
	var dots = false;

	function initialize() {

		buildCarousel();
		runListeners();
	}

	function buildCarousel() {
		// Unset preset begin slides if more than one is set
		if ($(target).find(".image.begin").length > 1)
		{
			$(slides).removeClass("begin");
		}

		for(i = 0; i < slides.length; i++)
		{
			// Update initial begin slide index if active class is preset
			if ($(slides[i]).hasClass('begin'))
			{
				activeSlideIndex = i;
			}

			// Build navigation bar if div exists
			if (navigation.length)
			{
				$(navigation).append('<figure class="dot"></figure>');
			}
		}

		// Display initial active slide
		$(slides[activeSlideIndex]).fadeIn();

		// Display initial active navigation point (dot)
		dots = $(navigation).find(".dot");
		$(dots[activeSlideIndex]).addClass("active");
	}

	function runListeners() {
		
		$(leftArrow).on("click", function() {

			if (activeSlideIndex)
				activeSlideIndex--;
			else
				activeSlideIndex = slides.length - 1;

			rotateImage();
		});

		$(rightArrow).on("click", function() {

			if (activeSlideIndex + 1 === slides.length)
				activeSlideIndex = 0;
			else
				activeSlideIndex++;

			rotateImage();
		});

		$(dots).on("click", function() {
			// Don't change if already on current slide
			if ($(this).hasClass("active"))
				return;

			activeSlideIndex = $(dots).index(this);
			rotateImage();
		});
	}

	function rotateImage() {
		// Hide slides and show the active slide
		$(slides).hide();
		$(slides[activeSlideIndex]).fadeIn("slow");

		// If navigation exists, remove active navigation points (dots) and set new active dot
		if (navigation.length)
		{
			$(dots).removeClass("active");
			$(dots[activeSlideIndex]).addClass("active");
		}
	}

	initialize();
}