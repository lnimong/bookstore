var page = require('webpage').create();

var url = 'http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=2&ajax=1&isAboveTheFold=0';
page.open(url, function (status) {
    console.log('Page is loaded!');
    console.log(page.content);

	page.onLoadFinished = function (status) {
    
	    window.setTimeout(function() {
	        

			
	        var result = page.evaluate(function () {

	        	var items = [];

	            $(".zg_itemRow").each(function(){

	            	var item = $(this);

					var image = item.find('.zg_itemImage_compact img').attr('src');
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
	        });
	        
	        console.log(result);
	        phantom.exit();
	        
	    }, 5000);
	};

	page.open(url, function () {
	 	page.injectJs('js/libs/jquery-1.9.0.js');
	});


	console.log('found '+ title);

    console.log('Page is rendered!');
    phantom.exit();
});