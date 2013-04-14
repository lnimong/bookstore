var casper = require('casper').create({
	 clientScripts:  [
	 	'js/libs/jquery-1.9.0.js'
	 ]
});

var jsontext = '';
var source = 'http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=2&ajax=1&isAboveTheFold=0';
var ghostform = 'http://localhost:5000/hidden/phantom/only';
var addbooks = 'http://localhost:5000/hidden/phantom/only/add/books';
var books = [];

casper.start(source).then(function() {
    this.echo("connected to " + source);
    items = this.evaluate(function(){

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
    });
});

casper.thenOpen(ghostform, function() {
    this.echo("Now I'm in your yahoo.")
});

casper.run(function(){
	this.echo(books.length);
});