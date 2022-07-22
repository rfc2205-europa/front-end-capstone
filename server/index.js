const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const controllers = require('./reqControllers.js');
const config = require('../config.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use(express.static('public'));

// add authentication header
// send api request with originalUrl
// then send api response back to client in response

// get request forwarding
app.post('/retrieve', controllers.handleGetRequests);

// post request handling
app.post('/*', controllers.handlePostRequests);

// put request handling
app.put('/*', controllers.handlePutRequests);

app.listen(config.port);
console.log(`Listening at http://localhost:${config.port}`);
