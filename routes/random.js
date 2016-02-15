'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/random');

router.get('/random', ctrl.math);
router.get('/random/:min/:max', ctrl.params);

module.exports = router;

