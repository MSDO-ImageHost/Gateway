const express = require('express');
const app = express();
const sendMsg = require('./routes/sendMsg');
const revMsg = require('./routes/revMsg');
const getAccountApi = require('./routes/account');
const getAuthenticationApi = require('./routes/authentication');

app.use(require('body-parser').json());
app.use(express.static(__dirname + '/static'));

app.get('/msg',revMsg);
app.post('/msg',sendMsg);

app.get('/api/account', getAccountApi);
app.get('/api/authentication', getAuthenticationApi);


app.listen(3000, () => console.log('Listening on port 3000'));