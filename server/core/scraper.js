var osmosis = require('osmosis');
var url = require('url');

var mappings = require('./mappings.json');

exports.parse = function (recipeUrl) {
    var hostname = url.parse(recipeUrl).hostname;
    hostname = hostname.replace('www.', '');

    return osmosis
        .get(recipeUrl)
        .set(mappings[hostname]);
};
