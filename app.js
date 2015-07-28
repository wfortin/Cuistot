var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

var passportConf = require('./config/passport.js');

var userController = require('./controllers/user');

var app = express();
app.use(passport.initialize());

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/cuistot';
mongoose.connect(mongoUri);

app.get('/auth/google', passportConf.authenticateGoogle);
app.get('/auth/google/callback', passportConf.authenticateGoogleCallback, userController.redirectToProfile);

app.get('/', userController.showLoginPage);
app.get('/profile', passportConf.authenticateBearer, passportConf.authenticateBearer, userController.showProfile);


app.listen(3000);