const amqp = require('amqplib/callback_api');

module.exports = (req, res) => {
    var msg = req.body.name;
    var parts = msg.toString().split('/');
    var queue = parts[0];
    var message = parts[1];
    
    amqp.connect(process.env.AMQP_URI, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(message));
        });
        setTimeout(function() {
            connection.close();
        }, 500);
    });
    console.log(" [x] Sent %s", message);
    const response = {
        body: message
    }
    res.send(response);
};