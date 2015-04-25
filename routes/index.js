var express = require('express');
var router = express.Router();
var twitter = require("../libs/t.js");

/* GET home page. */
router.get('/', function(req, res) {
  twitter.get();
  if (twitter.current){
    res.render('index', { tweet: twitter.current});
  } else if (twitter.err) {
    res.render('error', {err: twitter.err});
  }
  else {
    res.send('reload pls');
  }
});
router.get('/fave/:id', function(req, res){
  twitter.fave(req.params.id);
  res.redirect('/');
})
router.get('/rt/:id', function(req, res){
  twitter.rt(req.params.id);
  res.redirect('/');
})

module.exports = router;
