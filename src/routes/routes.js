// app/frontend.js
"use strict";
const user = require('./frontend/user'),
      // test = require('./frontend/test'),
	  respond = require('./frontend/respond'),
	  login3 = require('./frontend/login3'),
	  index = require('./frontend/index'),
	  dir = require('./frontend/dir'),
	  backendSetting = require('./backend/setting');
	  // api = require('./frontend/api'),
	 // post = require('./frontend/post');

// const User = require('../models/User');
// const passport = require('passport');

module.exports   = function(app, passport, User) {
	 app.use('/',index);  
	 app.use('/response',respond);   
	 app.use('/user',user(app,User,passport));
	 // app.use('/api',api);
	 app.use('/auth',login3);
	 app.use('/dir', dir);

     app.use('/admin', backendSetting);
};
