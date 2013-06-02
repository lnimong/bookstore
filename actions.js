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

actions.Search = function(text, db, response) {
	finder.findbooks(text, db, function(jsonres) {
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
	$('zg_itemImmersion').each(function(){

    	var item = $(this);

		var image = item.find('.zg_image img').attr('src');
		var title = item.find('.zg_title').text();
		var price = 0;
		var pstring = item.find('.price').text().split(' ');
		if(pstring.length === 2) {
			price = parseFloat(pstring[1].replace(',','.'));
		}

		var newbook = {
			Title:title, 
			Shop: {
				Name: 'Amazon',
				Skin: 'amazon'
			},
			Format:'kindle',
			Description:'aucune description disponible',
			Price:price,
			Cover:image
		};

		books.push(newbook);

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

