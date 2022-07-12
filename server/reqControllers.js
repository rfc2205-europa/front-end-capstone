const config = require('../config.js');
const axios = require('axios');

module.exports.handleGetRequests = (req, res) => {
  console.log('\nMethod:', req.method);
  // console.log('auth token:', config.token);
  console.log('\napi endpoint:', req.originalUrl);
  // console.log('\napi queries:', req.query);
  // console.log('body:', req.body.api);
  const options = {};
  const apiUrl = req.body.api;
  // console.log('type of url', typeof(apiUrl));
  options.url = apiUrl;
  options.method = 'get';
  options.headers = {'Authorization': config.token};
  // console.log('options:', options);
  axios(options)
      .then((response) => {
        res.status(200).send(response.data);
        // res.send(response);
      })
      .catch((error) => {
        res.status(404).send('get error:', error);
        // res.send(error);
      });
};

module.exports.handlePostRequests = (req, res) => {
  const options = {};
  // handle click events
  if (req.body.type === 'click') {
    console.log(req.body.clickEvent);
    res.send('click received');
  }
  // post reviews
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
    axios(options)
        .then((response) => {
          res.status(201).send(response);
        })
        .catch((error) => {
          res.status(404).send('post review error:', error);
        });
  } else if (req.body.type === 'questions.question') {
    options.url = req.body.api;
    options.method = 'post';
    options.headers = {'Authorization': config.token};
    options.data = {
      'body': req.body.body,
      'name': req.body.name,
      'email': req.body.email,
      'product_id': req.body.product_id,
    };
    axios(options)
        .then((response) => {
          res.status(201).send(response);
        })
        .catch((error) => {
          res.status(404).send('post question error:', error);
        });
  } else if (req.body.type === 'questions.answer') {
    options.url = req.body.api;
    options.method = 'post';
    options.headers = {'Authorization': config.token};
    options.data = {
      'body': req.body.body,
      'name': req.body.name,
      'email': req.body.email,
      'photos': req.body.photos,
    };
    console.log('answer post options:', options);
    axios(options)
        .then((response) => {
          res.status(201).send(response);
        })
        .catch((error) => {
          res.status(404).send('post answer error:', error);
        });
  }
};

module.exports.handlePutRequests = (req, res) => {
  // put reviews
  if (req.body.type === 'review') {
    // mark review as helpful
    if (req.body.api.includes('helpful')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      axios(configSetting)
          .then(function(response) {
            res.sendStatus(204);
          })
          .catch(function(error) {
            res.status(404).send('review helpful error:', error);
          });
    } else if (req.body.api.includes('report')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      axios(configSetting)
          .then((response) => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(404).send('review report error:', error);
          });
    }
  } else if (req.body.type === ('question')) {
    if (req.body.api.includes('helpful')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      console.log('marking question as helpful');
      axios(configSetting)
          .then((response) => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(404).send('question helpful error:', error);
          });
    } else if (req.body.api.includes('report')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      console.log('reporting question');
      axios(configSetting)
          .then((response) => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(404).send('question report error:', error);
          });
    }
  } else if (req.body.type === 'answer') {
    if (req.body.api.includes('helpful')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      console.log('marking answer as helpful');
      axios(configSetting)
          .then((response) => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(404).send('answer helpful error:', error);
          });
    } else if (req.body.api.includes('report')) {
      const configSetting = {
        method: 'put',
        url: req.body.api,
        headers: {'Authorization': config.token},
      };
      console.log('reporting answer');
      axios(configSetting)
          .then((response) => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(404).send('answer report error:', error);
          });
    }
  }
};
