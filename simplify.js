var simplify = exports;


simplify.server = function (express, directories_) {

	var app = express.createServer(express.logger());

	for(var i = 0; i < directories_.length; ++i)
		app.use('/' + directories_[i], express.static(__dirname + '/' +  directories_[i]));

	return app;
};

simplify.webmanager = function(get_) {
	return {
		page : function(url, callbackOK, callbackNOK) {

			get_(url, function (error, response, body) {
			    if (!error)
			        callbackOK (body) ;
			    else if (callbackNOK)
			        callbackNOK (error) ;
			});
		}
	}
};

simplify.forEach = function (array, action) {
	for(var i = 0; i <  array.length; ++i)
		action(array[i],i);
}