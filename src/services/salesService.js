const salesModel = require('../models/salesModel');
const productsModel = require('../models/productModel');
const { returnSalesError, returnProductError } = require('../../tests/mocks/returnErrors');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();

  return result;
};
const getSalesFromId = async (id) => {
  const result = await salesModel.getSalesFromId(id);

  if (!result) return returnSalesError;
  return result;
};

const getSalesIdWithDate = async (id) => {
  const result = await salesModel.getSalesIdWithDate(id);

  if (result.length === 0) return returnSalesError;
  return result;
};

const registerSales = async (sales) => {
  const validate = sales.map(async (item) => {
    const result = await productsModel.getProductFromId(item.productId);
    return result;
  });
  const test = await Promise.all(validate);

  if (test.some((item) => !item)) {
    return returnProductError;
  }

  const result = await salesModel.registerSales(sales);

  return result;
};

module.exports = {
  getAllSales,
  getSalesFromId,
  registerSales,
  getSalesIdWithDate,
 
};
