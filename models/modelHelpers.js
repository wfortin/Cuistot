exports.toJSON = function() {
    var obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
    delete obj.access_token;

    return obj;
};
