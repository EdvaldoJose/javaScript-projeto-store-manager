const productModel = require('../models/productModel');
const {
  returnProductError,
  returnUpdateError } = require('../../tests/mocks/returnErrors');

const getAllProducts = async () => {
  const product = await productModel.getAllProducts();
  return product;
};

const getProductFromId = async (id) => {
  const product = await productModel.getProductFromId(id);
  return product;
};

const insertProduct = async ({ name }) => {
  const id = await productModel.insertProduct(name);
  const product = await productModel.getProductFromId(id);
  return product;
};

const updateProduct = async (name, id) => {
  const productId = await productModel.getProductFromId(id);
  if (!productId) return returnProductError;
  const affectedRows = await productModel.updateProduct(name, id);
  if (!affectedRows) return returnUpdateError;
  const result = await productModel.getProductFromId(id);
  return result;
};

const deleteProduct = async (id) => {
  const idProduct = await productModel.getProductFromId(id);

  if (!idProduct) return returnProductError;

  const deletedProduct = await productModel.deleteProduct(id);

  return deletedProduct;
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
  deleteProduct,

};