var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var modelHelpers = require('./modelHelpers.js');

var RecipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    image: String
});

RecipeSchema.plugin(findOrCreate);
RecipeSchema.method('toJSON', modelHelpers.toJSON);

mongoose.model('Recipe', RecipeSchema);
