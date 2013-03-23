var actions = exports;

var finder = require('./booksfinder');

actions.Index = function(response) {
	response.render('index')
}

actions.Shell = function(response) {
	response.render('shell')
}

actions.Search = function(response) {
	console.log("new search request");
	finder.findbooks(function(jsonres) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(jsonres));
	 	response.end();
	});
}

actions.CommandLine = function(response, query) {
 	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('response for ' + query['req'] + ' on ' + __dirname);
 	response.end();
}


