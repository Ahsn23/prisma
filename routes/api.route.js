const router = require('express').Router();
const productController = require('../controller/products.controller');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getProductById);

router.post('/products', productController.createProduct);

router.delete('/products/:id', productController.deleteProduct);

router.put('/products/:id', productController.updateProduct);

module.exports = router;