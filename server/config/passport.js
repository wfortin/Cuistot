var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

var secrets = require('./secrets');
var User = mongoose.model('User');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: secrets.google.clientID,
    clientSecret: secrets.google.clientSecret,
    callbackURL: secrets.google.callbackURL
}, function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(
        {googleId: profile.id},
        function (err, result) {
            if (result) {
                result.access_token = accessToken;
                result.save(function (err, doc) {
                    done(err, doc);
                });
            } else {
                done(err, result);
            }
        });
}));

exports.authenticateGoogle = passport.authenticate('google', {session: false, scope: 'https://www.googleapis.com/auth/plus.login'});

exports.authenticateGoogleCallback = passport.authenticate('google', {session: false, failureRedirect: '/'});

passport.use(new BearerStrategy(function (token, done) {
    User.findOne({access_token: token},
        function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, user, {scope: 'all'});
        });
}));

exports.authenticateBearer = passport.authenticate('bearer', {session: false});
