var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require('cors')

var secrets = require('./config/secrets');

require('./models/user');
require('./models/recipes');

mongoose.connect(secrets.db);

var passportConf = require('./config/passport');
var userController = require('./controllers/user');
var recipesController = require('./controllers/recipes');

var app = express();
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json());


app.get('/auth/google', passportConf.authenticateGoogle);
app.get('/auth/google/callback', passportConf.authenticateGoogleCallback, userController.redirectToProfile);

app.get('/', userController.showLoginPage);
app.get('/profile', passportConf.authenticateBearer, userController.showProfile);

app.get('/recipes', passportConf.authenticateBearer,recipesController.getUserRecipes);
app.post('/recipes', passportConf.authenticateBearer,recipesController.addRecipe);


app.listen(3001);
