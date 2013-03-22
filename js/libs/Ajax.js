define(['jquery'], function($) {

	return function (url, param, callback) {
		
		$.get(url, function(data, status) {
			callback(data);	
		})
	}
})