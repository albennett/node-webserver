'use strict';
const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {
  res.send(Math.random().toString());
});

router.get('/random/:min/:max', (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  res.send(getRandomInt(+min, +max).toString());
});

module.exports = router;
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
