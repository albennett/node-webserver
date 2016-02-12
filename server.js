'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://localhost:27017/node-webserver';

const routes = require('./routes/routes');
const api = require('./routes/api');
const contacts = require('./routes/contacts');
const sendphotos = require('./routes/sendphotos');

app.set('view engine', 'jade');

app.locals.title = 'THE Super Cool App';
//middleware chain
app.use(routes);
app.use(api);
app.use(contacts);
app.use(sendphotos);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a ranom integer between min (included) and max (excluded)

module.exports = app;
