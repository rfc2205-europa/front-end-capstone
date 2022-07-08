const config = require('../config.js');
const axios = require('axios');

module.exports.handleGetRequests = (req, res) => {
  console.log('\nMethod:', req.method);
  console.log('auth token:', config.token);
  console.log('\napi endpoint:', req.originalUrl);
  // console.log('\napi queries:', req.query);
  // console.log('body:', req.body.api);
  const options = {};
  const apiUrl = req.body.api;
  console.log('type of url', typeof(apiUrl));
  options.url = apiUrl;
  options.method = 'get';
  options.headers = {'Authorization': config.token};
  console.log('options:', options);
  axios(options)
      .then((response) => {
        console.log(response.data);
      });
  res.sendStatus(200);
};

module.exports.handlePostRequests = (req, res) => {
  const options = {};
  if (req.body.type === 'review') {
    options.url = req.body.api;
    options.method = 'post';
    options.headers = {'Authorization': config.token};
    options.data = {
      'product_id': req.body.product_id,
      'rating': req.body.rating,
      'summary': req.body.summary,
      'body': req.body.body,
      'recommend': req.body.recommend,
      'name': req.body.name,
      'email': req.body.email,
      'photos': req.body.photos,
      'characteristics': req.body.characteristics,
    };
    console.log('review post options:', options);
    res.sendStatus(201);
  }
};
