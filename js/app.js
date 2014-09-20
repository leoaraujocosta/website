
$(document).ready(function() {
	$( '#logo' ).fadeIn(1000, function() {
		$( '#brightness_logo' ).fadeIn(1500, function() {
			$( '#shadow_logo' ).fadeIn(900, function() {
				$( '#rhombus_center' ).fadeIn(1000, function() {
					$( '#first_rhombus_dark' ).fadeIn(1000, function() {
						$( '#second_rhombus_dark' ).fadeIn(800, function() {
							$( '#rhombus_lines' ).fadeIn(900);
						});
					});
				});
			});
		});
	});

	scrollToElement();
});
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
	orbit: {
		animation: 'slide',
		pause_on_hover: false,
		animation_speed: 300,
		navigation_arrows: false,
		bullets: false,
		timer: false,
		resume_on_mouseout: false,
		timer_show_progress_bar: false,
		slide_number: false,
		next_on_click: false
	}
});

function scrollToElement () {
	var link = $('a, .logo4','.top-bar-section');

	$(link).click(function(event) {
		var el = $(this).attr('data-link');
		$(el).animatescroll();
	});
}

// $(window).scroll(function(){
// 	var $navBar = $('.top-bar');
// 	var navBar_offset = $navBar.offset().top - $(window).scrollTop();
	
// 	if(navBar_offset < 0){
// 		$navBar.css({
// 			position: 'fixed',
// 			top: navBar_offset,
// 		})
// 	}
// })
