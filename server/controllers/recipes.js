var mongoose = require('mongoose');

var User = mongoose.model('User');
var Recipe = mongoose.model('Recipe');

var scraper = require('../core/scraper');

exports.getUserRecipes = function(req, res) {
    User.findById(req.user.id, function (err, user) {
        if (err) console.error(err);

        User.findById(user._id).populate('recipes').exec(function (err, user) {
            if (err) console.log(err);

            res.send(user.recipes);
        });
    });
};

exports.addRecipe = function (req, res) {
    User.findById(req.user.id, function (err, user) {
        if (err) console.error(err);

        var recipeUrl = req.body.url;
        scraper.parse(recipeUrl).then(function (context, data) {
            Recipe.findOrCreate({
                url: data.url
            }, data, function (err, recipe) {
                if (err) console.error(err);

                // TODO: make sure we don't add the same recipe twice
                user.recipes.push(recipe.id);
                user.save(function(err) {
                    if (err) console.error(err);

                    console.log(user);

                    User.findById(user._id).populate('recipes').exec(function (err, user) {
                        if (err) console.log(err);

                        res.send(recipe);
                    });
                })
            });
        });

    });
};
