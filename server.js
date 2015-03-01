var express = require('express');

var server = express();

server.use(function(req, res, next) {
    console.log('1: ' + req.url);
    if (req.url == '/')
      req.url += 'index.htm';
    next();
});

server.use(function(req, res, next) {
    console.log('2: ' + req.url);
    next();
});

server.use(express.static(__dirname + '/public'));

var port = 10001;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
