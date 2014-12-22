// var app = require('./server/server.js');
var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require('morgan');

var app = express();

var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/..'));


app.listen(port);
console.log("Listening on localhost: " + port)

app.get('/', function(req, res) {
})

