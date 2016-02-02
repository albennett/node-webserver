'use strict';
const express = require('express');
//shorten it to require('express')();
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/hello', (req,res) => {
  const name = req.query.name;
  const msg = `<h1>Hello ${name}!</h1>`;
 console.log('query params', req.query);

  msg.split('').forEach((char, i) => {
    setTimeout(() => {
    res.write(char);
  }, 1000 * i);
  });

  setTimeout(() => {
    res.end('end')
  }, 20000);

  res.writeHead(200, {
   'Content-type': 'text/html'
  })
});

app.get('/cal/:mon/:yr', (req, res) => {
  const months = require('node-cal/lib/months');
  console.log("months", months);
  const mon = req.params.mon;
  const yr = req.params.yr;
  res.send(`<pre>${months.fullMonth(mon, yr)}</pre>`);
});

app.get('/random', (req, res) => {
  res.send(Math.random().toString());
});

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/random/:min/:max', (req, res) => {
  const min = req.params.min;
  const max = req.params.max;
  res.send(getRandomInt(+min, +max).toString());
});

app.all('*', (req, res) => {
  res
  .status(403)
  .send('Access Denied!');
});

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
// put into terminal -- PORT=1337 node --harmony_destructuring server.js
});
