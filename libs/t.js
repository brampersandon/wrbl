var Twit = require('twit');
var config = require('../config.json');
var twit = new Twit(config.twit);
var state = { // this holds our constants, and shares the data the t.js module pulls with our router (router.js)
  last: null,
  period: 1800000, // every hour, pick a new tweet
  current: null,
  get: function(){
    if(state.last == null || (state.last.getTime() + state.period) < Date.now()){
      twit.get("statuses/home_timeline", function(err, data){
        if (err) { // this probably shouldn't happen.
          state.err = err;
          state.last = new Date();
          return;
        }
        state.current = data[1]; //Math.floor(Math.random()*(data.length-1))
        state.last = new Date();
      });
    }
  }
  /* This is the part where we'd implement OAuth, I think? Per https://dev.twitter.com/web/sign-in/implementing
  , getToken: function(){
    twit.post("oauth/request_token", {oauth_callback:"???"})
  }
  */
}


module.exports = state;
