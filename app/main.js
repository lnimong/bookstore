var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());


app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', { title: 'The index page!' })
});


app.listen(port, function() {
  console.log("Listening on port " + port);
});
