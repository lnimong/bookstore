var simplify = require('./simplify');

var lafnac = exports;

var fnac = {
	Name: 'La Fnac',
	Skin: 'fnac'
}

var amazon = {
	Name: 'Amazon',
	Skin: 'amazon'
}

var teamalexandriz = {
	Name: 'Teamalexandriz',
	Skin: 'teamalexandriz'
}

/*
var books = [
	{
		Title:'The Titre qui est quand meme super long que c\'est genre super chiant', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	}
];*/

 

lafnac.crawl =  function (web, db) {

	var books = [];

	web.page('http://www.amazon.fr/gp/bestsellers/digital-text/695398031/ref=zg_bs_695398031_pg_1?ie=UTF8&pg=2&ajax=1&isAboveTheFold=0',
		function(html) {

			console.log('returned')



			html('div.zg_item_compact').map(function() {


				var item = html(this);
				var image = item.find('.zg_itemImage_compact img').attr('src');
				var title = item.find('.zg_title').text();
				var price = 0;
				var pstring = item.find('.price').text().split(' ');
				if(pstring.length === 2) {
					price = parseFloat(pstring[1].replace(',','.'));
				}
				
				console.log('found '+ title);

				db.collection('books').insert({
					Title:title, 
					Shop:fnac, 
					Format:'kindle',
					Description:'aucune description disponible',
					Price:price,
					Cover:image
				});
			});

		}
	);

};






















