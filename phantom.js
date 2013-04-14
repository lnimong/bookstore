var page = require('webpage').create();
var page2 = require('webpage').create();

var source = 'http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=2&ajax=1&isAboveTheFold=0';

var ghostform = 'http://localhost:5000/hidden/phantom/only';
var addbooks = 'http://localhost:5000/hidden/phantom/only/add/books';

page.open(source, function (status) {

 	page.injectJs('js/libs/jquery-1.9.0.js');
	console.log('Page is loaded!');
	
    var result = page.evaluate(function () {


    	var books = [];

        $(".zg_item").each(function(){

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
			return JSON.stringify(books);
        });

    });
    

    page2.open(ghostform, function(status) {
    	page2.injectJs('js/libs/jquery-1.9.0.js');
    	var res2 = page2.evaluate(function() {
    		return $('input').length;
    	});
    	console.log('second page '+res2);
    })

    console.log(result);
    console.log('Page is rendered!');
    phantom.exit();
});





