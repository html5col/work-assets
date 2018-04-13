"use strict";
const express = require('express'),
      router = express.Router(),
      auth = require('../../middlewares/auth'),
      backend = require('../../controllers/backend');

router.get('/projects', auth.isLoggedIn, backend.projectsList);
router.get('/weeklyrec', auth.isLoggedIn, backend.weeklyrec);


module.exports = router;