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
app.get('/*', controllers.handleGetRequests);

// post request handling
app.post('/*', controllers.handlePostRequests);

// put request handling
app.put('/*', controllers.handlePutRequests);

app.listen(config.port);
console.log(`Listening at http://localhost:${config.port}`);
