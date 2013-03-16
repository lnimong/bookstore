var http = require('http');
var path = require('path');
var url = require('url');

var port_ = process.env.PORT  


//var fs = require('fs');
//var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('hello world on ' + url.parse(req.url).pathname + ' again');

}).listen(port_);
