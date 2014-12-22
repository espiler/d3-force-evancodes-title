var app = require('./server/server.js');
var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require('morgan');

var app = express();

var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/'));





app.listen(port);
console.log("Listening on localhost: " + port)




// file dependencies
var config = require('./config');
var router = require('./router');


// run app through config
config.express(app);

// use router for app
router(app);


app.listen(process.env.PORT || 9000)
console.log('app listening on localhost:' + 9000);

// expose app 
module.exports = app;

var express = require('express');
var eventRouter = require('./api/events');
var userRouter = require('./api/users');
var photoRouter = require('./api/photos');
var ratingRouter = require('./api/ratings');

module.exports = function ( app ) {
  // router
  app.use('/api/events', eventRouter);
  app.use('/api/users', userRouter);
  app.use('/api/photos', photoRouter);
  app.use('/api/ratings', ratingRouter);

  // static
  // app.use(express.static(__dirname + '/../client'));