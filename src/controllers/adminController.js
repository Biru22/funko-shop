const adminControllers = {
  admin: (req, res) => res.send('Route for Admin View'),
  createGet: (req, res) => res.send('Route for Admin createGet View'),
  createPost: (req, res) => res.send('Route for Admin createPost View'),
  editGet: (req, res) => res.send('Route for editGet View'),
  editPut: (req, res) => res.send('Route for editPut View'),
  delete: (req, res) => res.send('Route for Delete View')
}

module.exports = adminControllers;