var simplify = exports;


simplify.server = function (express, directories_) {

	var app = express.createServer(express.logger());

	for(var i = 0; i < directories_.length; ++i)
		app.use('/' + directories_[i], express.static(__dirname + '/' +  directories_[i]));

	return app;
};

simplify.webmanager = function(get_, $_) {
	return {
		page : function(url, callbackOK, callbackNOK) {

			get_(url, function (error, response, body) {
			    if (!error) {
			    	//console.log(body);
			        callbackOK ( { 
			        	dom : $_.load(body),
			        	text : body
			        }) ;
			    }
			    else if (callbackNOK) {
			    	console.log('error on  page '+url);
			        callbackNOK (error) ;
			    }
			});
		}
	}
};

simplify.forEach = function (array, action) {
	for(var i = 0; i <  array.length; ++i)
		action(array[i],i);
}

simplify.log = function (message) {
	console.log('IKABOO ************************************************************************************');
	console.log(message);
}