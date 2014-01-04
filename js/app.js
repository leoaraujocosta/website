// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


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
});