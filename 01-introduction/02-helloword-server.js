#!/usr/bin/node
<<<<<<< HEAD
onst http = require('http');
=======

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('hello');
});

server.listen(8080);

>>>>>>> 71db2e86d063967331bd659fed8d86a264446a9c

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('hello');

});

server.listen(8080);
