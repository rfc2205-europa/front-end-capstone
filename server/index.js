const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./reqControllers.js');
const config = require('../config.js');

const app = express();

app.use(bodyParser.json());

// add authentication header
// send api request with originalUrl
// then send api response back to client in response

// get request forwarding
app.get('/*', controllers.handleRequests);

// post request handling
app.post('/*', controllers.handleRequests);

// put request handling
app.put('/*', controllers.handleRequests);

app.listen(config.port);
console.log(`Listening at http://localhost:${config.port}`);
