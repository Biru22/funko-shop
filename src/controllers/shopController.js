const path = require("path");

const data = [
  {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 10799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 3,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 5,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
  },
];

const shopControllers = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data
    });
  },
  item: (req, res) => {
    const itemId = req.params.id;
    const item = data.find(item => item.product_id == itemId);
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
