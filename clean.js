var reset = exports;

reset.books = function(db) {
	db.collection('books').remove({});
}