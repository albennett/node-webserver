'use strict';
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  const msg = `<h1>Hello ${name}!</h1>
<h2>Goodbye ${name}!</h2>`;

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  // chunk response by character
  msg.split('').forEach((char, i) => {
    setTimeout(() => {
      res.write(char);
    }, 1000 * i);
  });

  // wait for all characters to be sent
  setTimeout(() => {
    res.end();
  }, msg.length * 1000 + 2000);
});

router.get('/random', (req, res) => {
  res.send(Math.random().toString());
});

router.get('/random/:min/:max', (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  res.send(getRandomInt(+min, +max).toString());
});

router.get('/secret', (req, res) => {
  res
    .status(403)
    .send('Access Denied!');
});

module.exports = router;

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

