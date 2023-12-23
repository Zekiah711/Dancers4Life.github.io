

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
	const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
	// Smooth scroll to the top when the link is clicked
	scrollToTopBtn.addEventListener('click', function (event) {
	  event.preventDefault();
  
	  // Using requestAnimationFrame for smoother animation
	  function scrollToTop() {
		const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
		if (currentPosition > 0) {
		  window.requestAnimationFrame(scrollToTop);
		  window.scrollTo(0, currentPosition - currentPosition / 10);
		}
	  }
  
	  scrollToTop();
	});
  });
  
