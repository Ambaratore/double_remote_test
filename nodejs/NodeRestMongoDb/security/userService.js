// users hardcoded for simplicity, store in a db for production applications
// const users = [{ id: 1, username: 'test', password: 'test'}];
const User = require('../model/user');

async function authenticate({ username, password }) {
  User.findOne({ username, password }, (err, data) => {
    console.log('authenticate function');
    if (err) throw err;
    console.log('authenticate data', data);
    return data;
  });
  // const user = users.find(u => u.username === username && u.password === password);
  // if (user) {
  //     const { password, ...userWithoutPassword } = user;
  //     return userWithoutPassword;
  // }
}

// async function getAll() {
//     return users.map(u => {
//         const { password, ...userWithoutPassword } = u;
//         return userWithoutPassword;
//     });
// }

module.exports = {
  authenticate,
  // getAll,
};
