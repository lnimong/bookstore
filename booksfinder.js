var finder = exports;


finder.findbooks = function (db, callback) {
	db.collection('books').find().toArray(function(err, books) {
		if (err) throw err;		
		callback(books);
	}); 
}



