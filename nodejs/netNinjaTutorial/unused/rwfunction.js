const fs = require('fs');
// const wFile = `${__dirname}/test_write.txt`;

// pipe
module.exports.fpipe = (rFile) => fs.createReadStream(rFile, 'utf8');

// rwa
module.exports.frwa = (rFile) => fs.readFile(rFile, 'utf8');

// rws
module.exports.frws = (rFile) => fs.readFileSync(rFile, 'utf8');

// stream
module.exports.stream = (rFile) => fs.createReadStream(rFile, 'utf8');
