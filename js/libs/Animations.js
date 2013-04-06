define(['jquery'], function($) {

	return function() {

		$(".bonus").hover(
			function() {
				$('.current.bonus').each(function() {
					$(this).removeClass('current');
				});
				$(this).addClass('current');
				$(this).animate({
					width:'400px'
				});
			},
			function() {
				$(this).removeClass('current');
				$(this).animate({
					width:'2.5em'
				});

			}
		);

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
