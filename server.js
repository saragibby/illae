//server.js

//setup the tools
var express  = require('express');
var app 	 = express();
var port 	 = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

//config
mongoose.connect(configDB.url);
require('./config/passport')(passport); // pass passport for config

//set up express app
app.use(morgan('dev')); //log every request to the console
app.use(cookieParser()); //read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); //setup ejs for templating

//require for passport
app.use(session({secret: 'illaeisawesome' })); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); // use connect-flash for flash msgs stored in session

//routes 
require('./app/routes.js')(app, passport); // load routes and pass in app and fully configed passport


//launch
app.listen(port);
console.log('Illage is here! ' + port);