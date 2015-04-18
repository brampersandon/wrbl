var express = require('express');
var router = express.Router();
var twitter = require("../libs/t.js");

/* GET home page. */
router.get('/', function(req, res) {
  twitter.get();
  res.render('index', { tweet: twitter.current });
});

module.exports = router;
