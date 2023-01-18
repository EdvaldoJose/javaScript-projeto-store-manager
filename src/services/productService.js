const productModel = require('../models/productModel');
const { returnProductError, returnUpdateError } = require('../../tests/mocks/returnErrors');

const getAllProducts = async () => {
  const product = await productModel.getAllProducts();
  return product;
};

const getProductFromId = async (id) => {
  const product = await productModel.getProductFromId(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductFromId,
};