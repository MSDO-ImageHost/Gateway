#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqps://zdwrqrmt:sBN1bzjrboG5tUJM2VvuzNsYSxUlLV4-@roedeer.rmq.cloudamqp.com/zdwrqrmt', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var msg = 'Hello Worlds?';
        var msg2 = 'World hello!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));
        channel.sendToQueue("goodbye", Buffer.from(msg2));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});