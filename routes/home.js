'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/home');

router.get('/', ctrl.findNews);

module.exports = router;
