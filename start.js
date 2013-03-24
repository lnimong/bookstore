var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var url = require('url');

var actions = require('./actions');
var easy = require('./helpers');

var port = process.env.PORT || 5000;
var dbConnectionString = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/localdb';

var app = easy.server(express, ['css', 'js', 'bootstrap'])
app.set('view engine', 'ejs');

app.get('/search', function(request, response) {
	console.log("new search request, connection to "+dbConnectionString);
	actions.Search(mongo.db(dbConnectionString), response); 
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


app.listen(port, function() {
  console.log("Listening on port " + port);
});
