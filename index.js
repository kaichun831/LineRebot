var express = require('express');
var bot = require('./src');

const app = express();
app.listen(80, () => {
  console.log('App listening on port 80!');
});
app.get('/', (req, res) => {
  res.send('run on 6666');
});
// app.use('/', bot);
// module.exports = app;
module.exports = require('./src');
