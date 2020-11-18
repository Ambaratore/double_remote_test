const http = require('http');
const rwf = require('./rwfunction.js');

const rFile = `${__dirname}/test_read.txt`;

http.createServer((req, res) => {
  if (req.url === '/text') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const myReadStream = rwf.fpipe(rFile);
    myReadStream.pipe(res);
  } else if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const myObj = {
      name: 'tore',
      role: 'admin',
      age: 32,
    };
    // res si aspetta una stringa oppure un buffer, quindi l'oggetto va serializzato
    res.end(JSON.stringify(myObj));
  } else {
    res.end('no data');
  }
  console.log(req.url);
}).listen(8081);
console.log('listening on port 8081');
