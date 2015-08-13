exports.showLoginPage = function (req, res) {
    res.render('login.html');
};

exports.redirectToApp = function (req, res) {
    res.redirect('http://localhost:3000/#recipe?access_token=' + req.user.access_token);
};
