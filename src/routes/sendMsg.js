const amqp = require('amqplib/callback_api');

module.exports = (req, res) => {
    var msg = req.body.name;

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
            channel.sendToQueue(queue, Buffer.from(msg));
        });
        setTimeout(function() {
            connection.close();
        }, 500);
});
    console.log(" [x] Sent %s", msg);
    const response = {
        body: msg
    }
    res.send(response);
};