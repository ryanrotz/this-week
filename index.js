require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/meetupapi', function(req, res) {

  req.body.key = process.env.MEETUP_API_KEY;

  request({
    url: 'https://api.meetup.com/2/open_events.json',
    method: 'GET',
    qs: req.body
  }, function(err, response, body) {
    if(!err && response.statusCode == 200) {
      res.send(response);
    }
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(process.env.PORT || 3001);

module.exports = server;
