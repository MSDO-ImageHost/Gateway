var amqp = require('amqplib/callback_api');

function receiver(queue, events){
    amqp.connect(process.env.AMQP_URI, function(err,connection){
        connection.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }
            var exchange = 'rapid';
            channel.assertExchange(exchange, 'direct', {durable: false});
            channel.assertQueue(queue);
            events.forEach(event => {
                channel.bindQueue(queue, exchange, event);        
            });
            channel.consume(queue, function(msg) {
                console.log("[x] Received: %s: \nData:%s \nProperties: %s \nHeader: %s\n", msg.fields.routingKey, msg.content.toString(), msg.properties, msg.properties.headers);
            });
        });
    });
}

module.exports = {
    receiver : function(queue, events) { receiver(queue, events) }
}


