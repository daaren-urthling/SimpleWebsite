var express = require('express');

var server = express();

server.use(function(req, res, next) {
    console.log(req.url);
    next();
});

server.use(express.static(__dirname + '/public'));

var port = 10001;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
