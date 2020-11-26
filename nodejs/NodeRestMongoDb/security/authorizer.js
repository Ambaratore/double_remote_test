const User = require('../model/user');

function myAsyncAuthorizer(username, password, cb) {
  User.findOne({ username, password }, (err, data) => {
    if (err) throw err;
    if (data) {
      return cb(null, true);
    }
    return cb(null, false);
  });
}
module.exports = myAsyncAuthorizer;
