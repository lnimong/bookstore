define(['knockout', 'Ajax', 'Helpers'], function(ko, ajax, easy) {

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
			return title.length > 18 ? jQuery.trim(title).substring(0, 14) + '...' : title;
		}, self);
		self.ShortShopName = ko.computed(function() {
			var shop = this.ShopName();
			return shop.length > 8 ? jQuery.trim(shop).substring(0, 6) + '...' : shop;
		}, self);
		self.VeryShortTitle = ko.computed(function() {
			var title = this.Title();
			return title.length > 14 ? jQuery.trim(title).substring(0, 18) + '...' : title;
		}, self);

	};


	return function(request, callback) {
		ajax('search?q='+encodeURIComponent(request.request), null, function(books){
			var booksViewModel = [];
			easy.forEach(books, function(book){
				booksViewModel.push(new Book(book));
			});
			callback(booksViewModel); 
		});
	}
})