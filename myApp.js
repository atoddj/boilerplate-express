var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = __dirname + '/views/index.html';

app.use(bodyParser.urlencoded({extended:false}));
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
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    var time = req.time;
    res.json({time});
});

app.get('/:word/echo', (req, res) => {
    res.json({"echo": req.params.word});
});

app.get('/name', (req, res) => {
    var {first, last} = req.query;
    res.json({name: `${first} ${last}`});
});

app.post('/name', (req, res) => {
    var {first, last} = req.body;
    res.json({name: `${first} ${last}`});
});






























 module.exports = app;
