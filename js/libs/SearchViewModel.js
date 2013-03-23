define(['knockout', 'Books', 'ManageUI', 'Helpers'], function(ko, FindBooks, ui, easy){


	var SearchViewModel = function () {
		var self = this;

		self.SearchRequest =  ko.observable();
		self.SearchCategory =  ko.observable();
		self.SearchType =  ko.observable();
		self.SearchResults = ko.observableArray();
		self.SearchTitle = ko.computed(function () {
			var search = this.SearchRequest ();
			return   search === '' ? "Bienvenue sur ikaboo.fr" : 'Résultats de recherche pour ' + search;
		}, self);

		self.Search = function () {

			ui.sendingRequest();

			FindBooks({
				request: this.SearchRequest,
				category: this.SearchCategory,
				type: this.SearchType
			}, function(books) {
				self.SearchResults.removeAll();
				
				easy.forEach(books, function(book) {
					self.SearchResults.push(book)
				});

				ui.responseReceived();

			}.bind(this));
		}
	}

	ui.whenSubmitSearch(function() {
		viewmodel.Search();
	});

	var viewmodel = new SearchViewModel ();
	easy.forEach(ui.htmlElts(), function(elt) {
		ko.applyBindings(viewmodel, elt)
	});
	viewmodel.Search();
	
})