var teamalexandriz = exports;


teamalexandriz.crawl =  function (web, db) {


	web.get('http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=2&ajax=1&isAboveTheFold=0'
		function(html) {
			html.each('div.zg_item_compact', function() {
				console.log('item');
			});
		}
	);

	db.collection('books').insert(books);
};
