var express = require('express');
var app = express();
console.log('Hello World');

var path = __dirname + 'views/index.html';

app.get('/', function(req, res) {
    res.send(path);
});

































 module.exports = app;
