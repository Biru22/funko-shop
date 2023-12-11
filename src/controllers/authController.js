const path = require('path');

const authController = {
  loginGet: (req, res) => {
    res.render(path.resolve(__dirname, '../views/auth/login.ejs'))
  },
  loginPost: (req, res) => res.send('Route for LoginPost View'),
  registerGet: (req, res) => {
    res.render(path.resolve(__dirname, '../views/auth/register.ejs'))
  },
  registerPost: (req, res) => res.send('Route for registerPost View'),
  logout: (req, res) => res.send('Route for logout View'),
}

module.exports = authController;
