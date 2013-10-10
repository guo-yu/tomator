var api = require('beer');

// weibo
exports.weibo = function(params, msg, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: msg.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}

// tqq
exports.tqq = function(params, msg, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: msg.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}

// qqspace
exports.qqspace = function(params, msg, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: msg.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}