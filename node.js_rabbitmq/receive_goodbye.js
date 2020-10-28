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

        var queue = 'goodbye';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});