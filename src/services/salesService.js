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
const deleteSale = async (id) => {
  const idSales = await salesModel.getSalesFromId(id); // alteração idSale (idSales);

  if (idSales.length === 0) return returnSalesError; // alteração idSale(idSales);

  await salesModel.deleteSale(id);
};

const updateSales = async (sales, saleId) => {
  const idCheck = await salesModel.getSalesFromId(saleId);

  if (idCheck.length === 0) return returnSalesError;

  const salesCheck = sales.map(async (item) => {
    const result = await productsModel.getProductFromId(item.productId);

    return result;
  });
  const salesProducts = await Promise.all(salesCheck);
  if (salesProducts.some((item) => !item)) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }
  const resultSales = sales.map(async (item) => {
    const result = await salesModel.updateSales(item, saleId);
    return result;
  });

  await Promise.all(resultSales);

  const result = await salesModel.getSalesFromId(saleId);
  return result;
};

module.exports = {
  getAllSales,
  getSalesFromId,
  registerSales,
  getSalesIdWithDate,
  deleteSale,
  updateSales,
};
