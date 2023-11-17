const router = require('express').Router();
const productController = require('../controller/products.controller');


router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getProductById);

router.post('/products', productController.createProduct);

router.delete('/products/:id', productController.deleteProduct);

router.put('/products/:id', productController.updateProduct);

module.exports = router;