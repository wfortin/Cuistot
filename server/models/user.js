var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
    googleId: String,
    access_token: String,
    recipes: [{type: mongoose.Schema.ObjectId, ref: 'Recipe'}]
});

UserSchema.plugin(findOrCreate);
UserSchema.methods.addRecipe = function (recipe) {
    var User = mongoose.model('User');
    User.findOneAndUpdate({_id: this._id}, {$addToSet: {recipes: recipe}});
};

mongoose.model('User', UserSchema);
