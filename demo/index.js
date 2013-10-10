var tomator = require('../index');

var demo = new tomator({
    weibo: 'accessToken'
});

demo.pub(new Date('2013/10/10 14:15:00'),{
    content: '1231223123123'
},function(err, result){
    console.log(err);
    console.log(result);
});