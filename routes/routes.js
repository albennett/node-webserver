'use strict';
const express = require('express');
const router = express.Router();

const api = require('./routes/api');
const contacts = require('./routes/contact');
const sendphotos = require('./routes/sendphoto');
const secret = require('./routes/secret');
const hello = require('./routes/hello');
const index = require('./routes/index');
const random = require('./routes/random');

router.use(api);
router.use(contacts);
router.use(sendphotos);
router.use(secret);
router.use(hello);
router.use(index);
router.use(random);

module.exports = router;


