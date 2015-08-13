exports.showLoginPage = function (req, res) {
    res.send('<a href="/auth/google">Log in</a>');
};

exports.redirectToApp = function (req, res) {
    res.redirect('http://localhost:3000/#recipe?access_token=' + req.user.access_token);
};
