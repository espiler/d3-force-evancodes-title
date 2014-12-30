// var app = require('./server/server.js');
var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/..'));


app.listen(process.env.PORT || 8080);
console.log("Listening on " + 8080)

app.get('/', function(req, res) {
})

