var express = require('express');
var app = express();
console.log('Hello World');

var path = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));
app.use((req, res, next) => {
    //logger function
    //method path - ip
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path);
});

app.get('/json', (req, res) => {
    var message = process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json';
    res.json({message});
})

































 module.exports = app;
