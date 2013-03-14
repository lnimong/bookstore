define(['jquery', 'Animations'], function($, animate) {
	return {
		sendingRequest : function() {
			$('#results').fadeOut();
		},

		responseReceived : function() {
			$('#results').fadeIn();
			animate();
		},

		htmlElts : function() {
			return [ $('#headSearch')[0], $('#results')[0] ];
		}
	}
})