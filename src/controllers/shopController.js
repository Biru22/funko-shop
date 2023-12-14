const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const shopControllers = {
  shop: async (req, res) => {
    const data = await getAll();
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data
    });
  },

  item: async (req, res) => {
    const itemId = req.params.id;
    const [item] = await getOne(itemId);
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"),{
      item
    });
  },
  
  add: (req, res) =>
    res.send("Route for add the current item to the shop cart"),
  cartGet: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/carrito.ejs"));
  },
  cartPost: (req, res) => res.send("Route for got to checkout page"),
};

module.exports = shopControllers;
