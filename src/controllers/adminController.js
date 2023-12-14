const path = require('path');
const { getAll, getOne } = require('../models/product.model');

const adminControllers = {
  admin: async (req, res) => {
    const data = await getAll();
    res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
      data
    })
  },

  createGet: (req, res) => {
    res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
  },

  createPost: (req, res) => res.send('Route for Admin createPost View'),

  editGet: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne(id)
    res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
      product
    })
  },

  editPut: (req, res) => res.send('Route for editPut View'),

  delete: (req, res) => res.send('Route for Delete View')
}

module.exports = adminControllers;
