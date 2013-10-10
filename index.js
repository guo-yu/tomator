var cronJob = require('cron').CronJob,
    _ = require('underscore'),
    sender = require('./sender');

var Tomator = function(params) {
    this.via = params;
}

Tomator.prototype.cron = function(pattern, params, callback, timezone) {
    var self = this;
    try {
        self.job = new cronJob({
            cronTime: pattern,
            onTick: function() {
                sender(self.via, params, callback);
            },
            start: true,
            timeZone: timezone ? timezone : "Asia/Shanghai"
        });
    } catch (ex) {
        callback(new Error('cron pattern not valid'));
    }
}

Tomator.prototype.start = function(pubdate, params, callback, timezone) {
    var self = this;
    if (_.isDate(pubdate)) {
        self.job = new cronJob({
            cronTime: pubdate,
            onTick: function() {
                sender(self.via, params, callback);
            },
            start: true,
            timeZone: timezone ? timezone : "Asia/Shanghai"
        });
    } else {
        callback(new Error('pubdate error'));
    }
}

Tomator.prototype.cancel = function() {
    if (this.job) this.job.stop();
}

module.exports = Tomator;