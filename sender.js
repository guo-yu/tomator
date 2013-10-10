var puber = require('./puber'),
    _ = require('underscore'),
    async = require('async');

module.exports = function(via, msg, callback) {
    var vias = [],
        results = [];
    var pub = function(way, cb) {
        puber[way.via](way, msg, function(err, result) {
            if (!err) {
                results.push(result);
                cb(null);
            } else {
                cb(err);
            }
        });
    }
    if (via) {
        _.each(via, function(token, key) {
            if (puber[key]) {
                vias.push({
                    via: key,
                    token: token
                });
            }
        });
        async.each(vias, pub, function(err) {
            callback(err, results);
        });
    }
}