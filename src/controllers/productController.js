const productService = require('../services/productService');
const status = require('../utils/status');

const getAllProducts = async (_req, res) => {
  const product = await productService.getAllProducts();
  res.status(status.HTTP_GET_OK).json(product);
};

const getProductFromId = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductFromId(id);

  if (!product) return res.status(status.NOT_FOUND).json({ message: 'Product not found' });
  res.status(status.HTTP_GET_OK).json(product);
};

const insertProduct = async (req, res) => {
  const result = await productService.insertProduct(req.body);

  return res.status(status.HTTP_INSERT_OK).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const update = await productService.updateProduct(name, id);

  if (update.type) return res.status(status[update.type]).json({ message: update.message });
  return res.status(status.HTTP_GET_OK).json(update);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productDeleted = await productService.deleteProduct(id);
  if (productDeleted) {
    return res.status(status[productDeleted.type])
      .json({ message: productDeleted.message });
  }
  res.status(status.HTTP_DELETE_OK).json({ message: 'Product deleted successfully' });
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const result = await productService.searchProduct(q);
  return res.status(status.HTTP_GET_OK).json(result);
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
