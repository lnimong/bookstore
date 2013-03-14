var http = require('http');
var path = require('path');
var url = require('url');



//var fs = require('fs');
//var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end(url.parse(req.url).pathname);
}).listen(9615);
