var express = require('express');
var fs = require('fs');
var finder = require('./booksfinder');

var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());
var setPublic = function (directories_) {
	for(var i = 0; i < directories_.length; ++i)
		app.use('/' + directories_[i], express.static(__dirname + '/' +  directories_[i]));
};

app.set('view engine', 'ejs');
setPublic(['css', 'js', 'bootstrap']);


app.get('/search', function(request, response) {
	console.log("new search request");
	finder.findbooks(function(jsonres) {
	 	response.writeHead(200, { 'Content-Type': 'application/json' });
	 	console.log(JSON.stringify(jsonres));
		response.write(JSON.stringify(jsonres));
	 	response.end();
	});
});

app.get('/', function(request, response) {
  response.render('index', { title: 'The index page!', text : __dirname })
});


app.listen(port, function() {
  console.log("Listening on port " + port);
});
