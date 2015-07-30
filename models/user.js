var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
    googleId: String,
    access_token: String,
    recipes: [{type: mongoose.Schema.ObjectId, ref: 'Recipe'}]
});

UserSchema.plugin(findOrCreate);
UserSchema.methods.addRecipe = function (recipe) {
    this.update({_id: this._id}, {$addToSet: {recipes: recipe._id}});
};

var User = mongoose.model('User', UserSchema);

exports.schema = UserSchema;
exports.model = User;
