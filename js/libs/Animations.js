define(['jquery'], function($) {

	return function() {

		$('.desc-img').hover(
			function() {
				$(this).addClass('highlighted');
				var div = $(this).find('div');
				div.animate({
					left:'0'
				});
			},
			function() {
				var div = $(this).find('div');
				div.animate({
					left:div.width()+'px'
				}, function() {
					$(this).removeClass('highlighted');
				});
			}
		);

	}

})
