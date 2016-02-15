'use strict';

const express = require('express');
const router = express.Router();

const api = require('./api');
const contacts = require('./contact');
const hello = require('./hello');
// const home = require('./home');
const random = require('./random');
const secret = require('./secret');
const sendphotos = require('./sendphoto');

router.use(api);
router.use(contacts);
router.use(hello);
// router.use(home);
router.use(random);
router.use(secret);
router.use(sendphotos);

module.exports = router;
