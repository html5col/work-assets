"use strict";
const express = require('express'),
      router = express.Router(),
      auth = require('../../middlewares/auth'),
      dir = require('../../controllers/dir');

router.get('/make', auth.isLoggedIn, dir.makeDir);
router.post('/postDir', auth.isLoggedIn, dir.postDir);


// router.get('/show/:title', post.showPost);
router.get('/detail', dir.detail);

module.exports = router;