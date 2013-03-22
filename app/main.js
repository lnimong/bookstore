var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/css'));

app.get('/', function(request, response) {

  response.end('hello world on ' + url.parse(req.url).pathname + ' again');
});


app.listen(port, function() {
  console.log("Listening on port " + port);
});
