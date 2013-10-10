var puber = require('./puber');

module.exports = function(via, msg, callback) {
    if (via) {
        _.each(via,function(token, key){
            if (puber[key]) {
                puber[key]({
                    token: token,
                    content: msg.content
                }, callback);
            }
        });
    }
}