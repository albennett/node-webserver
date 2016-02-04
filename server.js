'use strict';
const express = require('express');
//shorten it to require('express')();
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const upload = require('multer')({ dest: 'tmp/uploads'});
const fs = require("fs");
const imgur = require('imgur');

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'jade');

app.locals.title = 'The Lovely Cal App'

// app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index', {
  });
});

app.get('/contact', (req, res) => {
  res.render('contact');
  });

app.post('/contact', (req, res) => {
  console.log("reqbody", req.body);
  const name = req.body.name;
  res.send(`<h1>Thanks for contacting us ${name}</h1>`);
})

app.get('/sendphoto', (req, res) => {
  res.render('sendphoto');

});

app.post('/sendphoto', upload.single('image'), (req, res) => {
  console.log('reqbody', req.body);
  console.log("req.file", req.file);
  // res.send('Thanks for sending us your photo');
  // get the temporary location of the file
  const tmp_path= req.file.path;
  //get the extention of the file
  const fullName = req.file.originalname;
  const splitRes = fullName.split(".");
  const newFileName = req.file.filename + '.' + splitRes[1];
 // set where the file should actually exists - in this case it is in the "images" directory
  const target_path = 'tmp/uploads/' + newFileName;
 // move the file from the temporary location to the intended location
  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
       // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
    fs.unlink(tmp_path, function() {
      if (err) throw err;
      res.send('File uploaded to: ' + target_path + ' - ' + req.file.size + ' bytes');
    });
  });

  imgur.uploadFile(target_path)
    .then(function (json) {
      console.log('imgr', json.data.link);
    })
    .catch(function (err) {
      console.error(err.message);
    });

});

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

app.all('/secret', (req, res) => {
  res
  .status(403)
  .send('Access Denied!');
});

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
// put into terminal -- PORT=1337 node --harmony_destructuring server.js
});
