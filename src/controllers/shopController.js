const shopControllers = {
  shop: (req, res) => res.send('Route for Shop View'),
  id: (req, res) => res.send(`Route for find and retrieve a product from an ID: ${req.params.id}`),
  add: (req, res) => res.send('Route for add the current item to the shop cart'),
  cartGet: (req, res) => res.send('Route for cart view'),
  cartPost: (req, res) => res.send('Route for got to checkout page')
}

module.exports = shopControllers;

/* Ejemplo de recuperación id
router.get('/shop/item/:id', (req, res) => {
  const id = req.params.id;
  res.send({item})
})
*/
