const config = require('../config.js')

module.exports.handleRequests = (req, res) => {
  console.log('\nMethod:', req.method);
  console.log('auth token:', config.token);
  console.log('\napi endpoint:', req.originalUrl);
  console.log('\napi queries:', req.query);
  res.sendStatus(200);
}