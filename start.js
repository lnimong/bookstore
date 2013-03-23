var express = require('express');
var fs = require('fs');
var pq = require('pg');
var url = require('url');

var actions = require('./actions');
var easy = require('./helpers');

var port = process.env.PORT || 5000;
var app = easy.server(express, ['css', 'js', 'bootstrap'])
app.set('view engine', 'ejs');


app.get('/search', function(request, response) {
	console.log("new search request");
	actions.Search(response);
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
