const express = require('express');
const app = express();
const sendMsg = require('./routes/sendMsg');
const revMsg = require('./routes/revMsg');

app.use(require('body-parser').json());
app.use(express.static(__dirname + '/static'));

app.get('/msg',revMsg);
app.post('/msg',sendMsg);
app.listen(3000, () => console.log('Listening on port 3000'));