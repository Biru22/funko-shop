const authController = {
  loginGet: (req, res) => res.send('Route for LoginGet View'),
  loginPost: (req, res) => res.send('Route for LoginPost View'),
  registerGet: (req, res) => res.send('Route for registerGet View'),
  registerPost: (req, res) => res.send('Route for registerPost View'),
  logout: (req, res) => res.send('Route for logout View'),
}

module.exports = authController;