var amqp = require('amqplib/callback_api');

function publish(event, msg,jwt){
  amqp.connect(process.env.AMQP_URI, function(err,connection){
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      var exchange = 'rapid';
      channel.assertExchange(exchange, 'direct',{durable: false});
      channel.publish(exchange,event,Buffer.from(msg), {contentType: "json", correlationId: "1", headers: {jwt:jwt}});
      console.log(" [x] Sent %s: '%s'\n", event, msg);
    });
  });
}

module.exports = {
  publish : function(event, msg,jwt) { publish(event, msg,jwt) }
}

