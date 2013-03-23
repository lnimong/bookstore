var helpers = exports;


helpers.server = function (express, directories_) {

	var app = express.createServer(express.logger());

	for(var i = 0; i < directories_.length; ++i)
		app.use('/' + directories_[i], express.static(__dirname + '/' +  directories_[i]));

	return app;
};

