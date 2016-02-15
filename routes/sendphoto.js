'use strict'
const express = require('express');
const router = express.Router();
const upload = require('multer')({ dest: 'tmp/uploads' });
const ctrl = require('../controllers/sendphoto');
router.get('/sendphoto', ctrl.index);
router.post('/sendphoto', upload.single('image'), ctrl.new );

module.exports = router;
