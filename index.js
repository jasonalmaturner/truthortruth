var express = require('express'),
  app = express(),
  passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy,
  session = require('express-session'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = 9001,
  r = require('rethinkdb'),
  host = 'truthortruth.com',
  connection = null;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'quando omni flunkus moritati',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, function(){
  console.log('listening on port:', port);
})
r.connect({host: host, port: 28015}, function(err, conn){
  if(err) throw err;
  connection = conn;
  console.log('db connected');
  // console.log(connection);
})
