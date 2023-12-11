const path = require('path');

const adminControllers = {
  admin: (req, res) => {
    res.render(path.resolve(__dirname, '../views/admin/admin.ejs'))
  },
  createGet: (req, res) => {
    res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
  },
  createPost: (req, res) => res.send('Route for Admin createPost View'),
  editGet: (req, res) => {
    res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
  },
  editPut: (req, res) => res.send('Route for editPut View'),
  delete: (req, res) => res.send('Route for Delete View')
}

module.exports = adminControllers;
