var api = require('beer');

// weibo
exports.weibo = function(params, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: params.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}

// tqq
exports.tqq = function(params, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: params.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}

// qqspace
exports.qqspace = function(params, cb) {
    api.post('https://api.weibo.com/2/statuses/update.json?access_token=' + params.token, {
        form: {
            status: params.content
        }
    }, function(err, result) {
        cb(err, result)
    });
}