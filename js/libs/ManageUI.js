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
			return [ $('#headSearch')[0], $('#results')[0], $('.navbar-inner')[0] ];
		},

		htmlShellElts : function() {
			return [ $('#commandline')[0], $('#infos')[0] ];
		},

		whenSubmitSearch : function(callback) {
			$('#headSearch').submit(function () {
				callback();
				return false;
			});
		},

		whenSubmitCommand : function(callback) {
			$('#commandline').submit(function () {
				callback();
				return false;
			});
		}
	}
})