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
	simplify.log("new search request, connection to "+dbConnectionString);

	var query = url.parse(request.url, true).query;
	
	searchstring = query['q'];

	simplify.log(request.url);
	simplify.log(query);
	simplify.log(searchstring);

	if(searchstring.substring(0, 1) === '1')
		searchstring = searchstring.substring(1).trim();
	else
		searchstring = null;

	actions.Search(searchstring, mongo.db(dbConnectionString), response); 
});

var amazonPage = "http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=<page>&ajax=1&isAboveTheFold=0";

app.get('/crawl/:source/:page', function(request, response) {

	var db = mongo.db(dbConnectionString);
	var page = '';

	if(request.params.source === 'amazon') {
		page = amazonPage.replace('<page>', request.params.page);
	}
	if(request.params.source === 'db' && request.params.page === 'clear') {
		db.collection('books').remove({});
		return;
	}


	if(page !== '')
	web.page(
		page, 
		function(html){
			response.writeHead(200, { 'Content-Type': 'application/json' });

			var books = [];

			html.dom('.zg_itemImmersion').map(function() {
				var item = html.dom(this);
				var image = item.find('.zg_image img').attr('src');
				var title = item.find('.zg_title').text();
				var price = 0;
				var pstring = item.find('.price').text().split(' ');
				if(pstring.length === 2) {
					price = parseFloat(pstring[1].replace(',','.'));
				}
				books.push({
					Title:title, 
					Shop: {
						Name: 'Amazon',
						Skin: 'amazon'
					},
					Format:'kindle',
					Description:'aucune description disponible',
					Price:price,
					Cover:image
				});

			});

			try {
				response.write('chaine de connection : ' + dbConnectionString);
				response.write('nombre de livres a ajouter : ' + books.length);
				db.collection('books').insert(books);
				response.write(JSON.stringify(books));
				response.end();
				return;
			} catch(erreur){
				response.write('chaine de connection : ' + dbConnectionString);
				response.write('une erreur est survenune\n' + erreur);
				response.end();
			}
		}
	);
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
	 	response.write(html.text);
	 	response.end();
	});
});

app.get('/hidden/phantom/only', function(request, response) {
	console.log('ghostform');

 	response.writeHead(200, { 'Content-Type': 'text/html' });
 	response.write('<html><head><script type="text/javascript" src="/js/libs/jquery-1.9.0.js"> </script></head><body><form method="post" id="ghostform" action="/hidden/phantom/only/add/books">');
 	response.write('<input name="apikey" id="apikey" />');
 	response.write('<input name="items" id="items" />');
 	response.write('<input name="submit" id="submit" type="submit" />');
 	response.write('<html><head></head><body><form method="post" id="ghostform">');
 	response.write('</form></body></html>');
 	response.end();
});

app.post('/hidden/phantom/only/add/books', function(request, response){

	console.log('add books');

	var query = url.parse(request.url, true).query;

	console.log(query['data']);
	console.log(query['me']);

 	response.writeHead(200, { 'Content-Type': 'text/html' });
 	response.write('good');
 	response.end();
});


app.listen(port, function() {
  console.log("Listening on port " + port);
});
