define(['knockout', 'jquery'], function(ko, $) {


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

	function Book (prop) {

		var self = this;
		self.Title = ko.observable(prop.Title);
		self.Shop = prop.Shop;
		self.ShopName =  ko.observable(prop.Shop.Name);
		self.Format = prop.Format;
		self.Description = prop.Description;
		self.Cover = prop.Cover;
		self.Price = ko.observable(prop.Price);
		self.FormattedPrice = ko.computed(function() {
			var price = this.Price();
			return price === 0? 'Gratuit' : parseFloat(Math.round(price * 100) / 100).toFixed(2) + '€';
		}, self);
		self.ShortTitle = ko.computed(function() {
			var title = this.Title();
			return title.length > 18 ? jQuery.trim(title).substring(0, 16) + '...' : title;
		}, self);
		self.ShortShopName = ko.computed(function() {
			var shop = this.ShopName();
			return shop.length > 8 ? jQuery.trim(shop).substring(0, 6) + '...' : shop;
		}, self);
		self.VeryShortTitle = ko.computed(function() {
			var title = this.Title();
			return title.length > 14 ? jQuery.trim(title).substring(0, 10) + '...' : title;
		}, self);

	};

	var books = [
		new Book({
			Title:'The Titre qui est quand meme super long que c\'est genre super chiant', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:320.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:320.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:320.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:320.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:amazon, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre', 
			Shop:fnac, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:32.50,
			Cover:'http://fakeimg.pl/100x200/'
		}),
		new Book({
			Title:'The Titre 2', 
			Shop:teamalexandriz, 
			Format:'epub',
			Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
			Price:0,
			Cover:'http://fakeimg.pl/100x200/'
		}),
	];


	return function(request, callback) {

		callback(books); 
	}
})