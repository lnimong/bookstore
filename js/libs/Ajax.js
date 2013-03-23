define(['jquery', 'Helpers'], function($, easy) {

	return function (url, param, callback) {
		
		var paramstring = '';

		if(param !== null) 
		{
			var sep = ['&', '=', '?'];
	
			easy.forEach(param, function(str, index){
	
				if (index === 0) 
					paramstring += (sep[2] + str);
				else
					paramstring += (sep[index%2] + str);
			});
		}
		
		$.get(url + paramstring, function(data, status) {
			callback(data);	
		})
	}
})