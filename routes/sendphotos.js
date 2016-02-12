'use strict'
const express = require('express');
const router = express.Router();
const upload = require('multer')({ dest: 'tmp/uploads' });

router.get('/sendphoto', (req, res) => {
  res.render('sendphoto');
});

router.post('/sendphoto', upload.single('image'), (req, res) => {
  res.send('<h1>Thanks for sending us your photo</h1>');
});

module.exports = router;
