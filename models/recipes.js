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

var Recipe = mongoose.model('Recipe', RecipeSchema);

exports.schema = RecipeSchema;
exports.model = Recipe;
