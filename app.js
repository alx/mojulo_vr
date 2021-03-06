var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res,next) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(client) {
  client.on('join', function(data) {
    client.emit('formula', 'x * y * time');
  });
});

server.listen(4200);
