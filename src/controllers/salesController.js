const salesService = require('../services/salesService');
const status = require('../utils/status');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  res.status(status.HTTP_GET_OK).json(result);
};

const getSalesFromId = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesFromId(id);
  if (result.type) {
    return res.status(status.NOT_FOUND).json({ message: result.message });
  }

  res.status(status.HTTP_GET_OK).json(result);
};

const getSalesIdWithDate = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesIdWithDate(id);
  if (result.type) {
    return res.status(status.NOT_FOUND).json({ message: result.message });
  }

  res.status(status.HTTP_GET_OK).json(result);
};

const registerSales = async (req, res) => {
  const result = await salesService.registerSales(req.body);
  if (result.type) return res.status(status[result.type]).json({ message: result.message });
  return res.status(status.HTTP_OK).json(result);
};
const deleteSale = async (req, res) => {
  const { id } = req.params;
  const saleDeleted = await salesService.deleteSale(id);
  if (saleDeleted) {
    return res.status(status[saleDeleted.type]).json({ message: saleDeleted.message });
  }

  res.status(status.HTTP_DELETE_OK).json();
};

const updateSales = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  const result = await salesService.updateSales(sales, id);
  if (result.type) return res.status(status[result.type]).json({ message: result.message });

  const responseToAPI = {
    saleId: id,
    itemsUpdated: result,
  };
  return res.status(status.HTTP_GET_OK).json(responseToAPI);
};

module.exports = {
  getAllSales,
  getSalesFromId,
  registerSales,
  getSalesIdWithDate,
  deleteSale,
  updateSales,
};