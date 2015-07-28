exports.showLoginPage = function (req, res) {
	res.send('<a href="/auth/google">Log in</a>');
};

exports.redirectToProfile = function (req, res) {
    res.redirect('/profile?access_token=' + req.user.access_token);
};

exports.showProfile = function (req, res) {
    res.send("LOGGED IN as " + req.user.googleId + " - <a href=\"/logout\">Log out</a>");
};