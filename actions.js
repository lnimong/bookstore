var actions = exports;

var clean = require('./clean');
var crawlers = [require('./lafnac')]
var finder = require('./booksfinder');
var simplify = require('./simplify');
 
actions.Index= function(response) {
	response.render('index')
};

actions.Shell = function(response) {
	response.render('shell')
};

actions.Search = function(db, response) {
	console.log("LNI SEARCH REQUEST : ");

	finder.findbooks(db, function(jsonres) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(jsonres));
	 	response.end();
	});
};

actions.CommandLine = function(response, query) {
 	response.writeHead(200, { 'Content-Type': 'text/plain' });
	var line = query['req'];
	response.write(eval(line) + '\n');
 	response.end();
};

actions.Crawl = function(web, db, response) {

	clean.books(db);
	simplify.forEach(crawlers, function(crawler) {
		console.log('crawler');
		crawler.crawl(web, db);
	});

 	response.writeHead(200, { 'Content-Type': 'text/plain' });
 	response.write("crawl ok");
 	response.end();
};

actions.SearchOnTheWeb = function (web, db, response) {


	console.log("new search request");

	finder.findontheweb(web, function(jsonres) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(jsonres));
	 	response.end();
	});
};

