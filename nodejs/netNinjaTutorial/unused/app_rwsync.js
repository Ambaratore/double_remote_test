const fs = require('fs');

const data = fs.readFileSync('test_read.txt');
fs.writeFileSync('test_write.txt', data, 'utf8');
