
const express = require('express');
const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const sum_router = require('./sum');

api.use('/',sum_router);
module.exports = api;

if (require.main === module) {
  const port = 3000;
  api.listen(port, '0.0.0.0', () => {
  console.log("Sistema corriendo en --> " + port);
});
}