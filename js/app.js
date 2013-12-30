// Classes que posiciona os elementos na tela;
var setPositionElement = function ( element, parent ) {
	var el = element,
		parent = parent,
		w,
		h,
		w_el,
		h_el,
		w_parent,
		h_parent;

	function init () {
		getSizeElement();
	}

	function getSizeElement () {
		w = $( window ).width();
		h = $( window ).height();
		w_el = $( el ).width();
		h_el = $( el ).height();

		if ( parent != '') {
			w_parent = $( parent ).width();
			h_parent = $( parent ).height();
		};

		calculatePosition();
	}

	function calculatePosition () {

		switch ( el ) {
			case '#logo':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 ) - 55) );
				break;
			case '#brightness_logo':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 ) ) );
				break;
			case '#rhombus_center':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2  + 93) ) );
				break;
			case '#first_rhombus_dark':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 + 70) ) );
				break;
			case '#second_rhombus_dark':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 - 35) ) );
				break;
			case '#rhombus_lines':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 + 73) ) );
				break;
			case '#shadow_logo':
				w = parseInt( ( ( w / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h / 2 ) - ( h_el / 2 - 174) ) );
				break;
			case '' :
				w = parseInt( ( ( w_parent / 2 ) - ( w_el / 2 ) ) );
				h = parseInt( ( ( h_parent / 2 ) - ( h_el / 2 - 174) ) );
				break;
		}		

		setPosition();
	}

	function setPosition () {
		$( el ).css({
			'top': h,
			'left': w
		});
	}

	init();
}

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(document).ready(function() {
	var setPositionLogo = new setPositionElement('#logo');
	var setPositionBrightnessLogo = new setPositionElement('#brightness_logo');
	var setPositionRhombusCenter = new setPositionElement('#rhombus_center');
	var setPositionFirstRhombusDark = new setPositionElement('#first_rhombus_dark');
	var setPositionSecondRhombusDark = new setPositionElement('#second_rhombus_dark');
	var setPositionRhombusLines = new setPositionElement('#rhombus_lines');
	var setPositionShadowLogo = new setPositionElement('#shadow_logo');
	var setPositionRhombusDarkService = new setPositionElement('#');

	$( '#logo' ).fadeIn(1000, function() {
		$( '#brightness_logo' ).fadeIn(1500, function() {
			$( '#shadow_logo' ).fadeIn(900, function() {
				$( '#rhombus_center' ).fadeIn(700, function() {
					$( '#first_rhombus_dark' ).fadeIn(1000, function() {
						$( '#second_rhombus_dark' ).fadeIn(800, function() {
							$( '#rhombus_lines' ).fadeIn(300);
						});
					});
				});
			});
		});
	});
});