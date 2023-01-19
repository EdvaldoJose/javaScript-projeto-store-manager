const productsRouter = require('express').Router();
const productController = require('../controllers/productController');
const { validateName } = require('../middlewares/validation');

productsRouter.get('/search', productController.searchProduct);
productsRouter.get('/', productController.getAllProducts);
productsRouter.get('/:id', productController.getProductFromId);
productsRouter.post('/', validateName, productController.insertProduct);
productsRouter.put('/id:', validateName, productController.updateProduct);
productsRouter.delete('/:id', productController.deleteProduct);

module.exports = {
  productsRouter,
};