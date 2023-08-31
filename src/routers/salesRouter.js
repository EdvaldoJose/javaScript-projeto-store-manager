const salesRouter = require('express').Router();
const salesController = require('../controllers/salesController');
const { validateSale } = require('../middlewares/validation');

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSalesIdWithDate);

salesRouter.post('/', validateSale, salesController.registerSales);

salesRouter.put('/:id', validateSale, salesController.updateSales);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = {
  salesRouter,
};
