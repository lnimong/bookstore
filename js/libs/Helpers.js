define(['jquery'], function($) {

	return {
		trim : function(text) {
			return $.trim(text);
		},

		apiUrl : window.location.protocol + window.location.host + '/search',
		
		forEach :  function (array, action) {
			for(var i = 0; i <  array.length; ++i) {
				action(array[i],i);
			}
		},

		isDefined: function(variable) {
			return typeof variable !== 'undefined'
		}
	}
})