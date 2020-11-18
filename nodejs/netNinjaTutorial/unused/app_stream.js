const fs = require('fs');

const readable = fs.createReadStream(`${__dirname}/test_read.txt`, 'utf8');
const writable = fs.createWriteStream(`${__dirname}/test_write.txt`);

readable.on('data', (chunk) => {
  writable.write(chunk);
});
