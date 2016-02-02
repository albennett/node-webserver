'use strict';
const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/hello') {
    const msg = '<h1>Hello World</h1>';

    msg.split('').forEach((char, i) => {
      setTimeout(() => {
      res.write(char);
    }, 1000 * i);
  });

   setTimeout(() => {
     res.end('end')
   }, 20000);
  } else if (req.url === '/random'){
    res.end(Math.random().toString());
  } else {
    res.writeHead(403);
    res.end('Access Denied');
  }

  //debugger;

  res.writeHead(200, {
    'Content-type': 'text/html'
  });

}).listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
  // put into terminal -- PORT=1337 node --harmony_destructuring server.js
});
