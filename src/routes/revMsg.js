var amqp = require('amqplib/callback_api');
var response = {
    body: []
}
module.exports = (req, res) => {
    amqp.connect(process.env.AMQP_URI, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'hello';

            channel.assertQueue(queue, {
                durable: false
            });
            channel.get(queue,{noAck: true},function(err,msgOrFalse) {
                if(msgOrFalse == false) res.send(false);
                else {
                    console.log(msgOrFalse.content.toString())
                    res.send({body: msgOrFalse.content.toString()})
                }
            });
        });
        setTimeout(function() {
            connection.close();
        }, 500);
    });
}