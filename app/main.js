var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());



fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

	app.get('/', function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
	});


	app.listen(port, function() {
	  console.log("Listening on " + port);
	});
});
