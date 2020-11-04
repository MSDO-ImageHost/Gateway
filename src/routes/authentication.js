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

            var queue = 'authentication';

            channel.assertQueue(queue, {
                durable: false
            });
            channel.get(queue,{noAck: true},function(err,msgOrFalse) {
                if (msgOrFalse == false) res.send(false);
                else {
                    console.log(msgOrFalse.content.toString())
                    
                    var response;
                    switch (msgOrFalse.content.toString()) {
                        case "RequestLoginToken":
                            response = "A request for login token was received";
                            break;
                            
                        case "RequestInvalidateLoginToken":
                            response = "A request for invalidating login token was received";
                            break;

                        case "RequestAccountCreate":
                            response = "A request for account creation was received";
                            break;

                        case "RequestAccountReset":
                            response = "A request for account reset was received";
                            break;

                        case "RequestAccountPasswordUpdate":
                            response = "A request for account password update was received";
                            break;

                        case "ConfirmAccountDeletion":
                            response = "A request for account deletion was received";
                            break;

                        default:
                            response = msgOrFalse.content.toString()
                    }

                    res.send({body: response});

                }
            });
        });
        setTimeout(function() {
            connection.close();
        }, 500);
    });
}