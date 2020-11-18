const fs = require('fs');

fs.readFile('test_read.txt', 'utf8', (err, data) => {
  fs.writeFile('test_write.txt', data, (errw) => {
    if (errw) console.log(errw);
  });
});
