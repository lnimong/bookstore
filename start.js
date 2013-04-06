var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var url = require('url');
var requestmodule = require("request");
var cheerio = require('cheerio');

var actions = require('./actions');
var simplify = require('./simplify');

var port = process.env.PORT || 5000;
var dbConnectionString = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/localdb';

var app = simplify.server(express, ['css', 'js', 'bootstrap']);
var web = simplify.webmanager(requestmodule, cheerio);

app.set('view engine', 'ejs');

app.get('/search', function(request, response) {
	console.log("new search request, connection to "+dbConnectionString);
	actions.Search(mongo.db(dbConnectionString), response); 
	//actions.SearchOnTheWeb(web, mongo.db(dbConnectionString), response); 
});

app.get('/crawl', function(request, response) {
	console.log("start crawling from "+ request.params.shop);
	actions.Crawl(web, mongo.db(dbConnectionString), response);
});

app.get('/', function(request, response) {
	actions.Index(response);
});

app.get('/admin/shell', function(request, response) {
	actions.Shell(response);
});

app.get('/admin/shell/execute', function(request, response) {
	actions.CommandLine(response, url.parse(request.url, true).query)
});

app.get('/test', function(request, response) {
	web.page('http://www.google.com', function(html) {
	 	response.writeHead(200, { 'Content-Type': 'text/html' });
	 	response.write(html);
	 	response.end();
	});
});

app.listen(port, function() {
  console.log("Listening on port " + port);
});
