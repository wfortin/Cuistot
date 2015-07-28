var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  googleId: {
    type: String
  },
  access_token: {
    type: String
  }
});

UserSchema.statics.findOrCreate = function (filters, cb) {
  User = this;
  this.find(filters, function (err, results) {
    if (results.length === 0) {
      var newUser = new User();
      newUser.googleId = filters.googleId;
      newUser.save(function (err, doc) {
        cb(err, doc);
      });
    } else {
      cb(err, results[0]);
    }
  });
};

var User = mongoose.model('User', UserSchema);

exports.schema = UserSchema;
exports.model = User;
