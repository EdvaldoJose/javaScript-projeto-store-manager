const returnSalesError = { type: 'NOT_FOUND', message: 'Sales not found' };
const returnProductError = { type: 'NOT_FOUND', message: 'Product not found' };
const returnUpdateError = { type: 'NOT_UPDATED', message: 'Unable to update the product' };

module.exports = {
  returnSalesError,
  returnProductError,
  returnUpdateError,
};

// const returnSalesError = { type: "NOT_FOUND", message: "Sale not found" };
// const returnProductError = { type: "NOT_FOUND", message: "Product not found" };
// const returnUpdateError = {
//   type: "NOT_UPDATED",
//   message: "Unable to update the product",
// };

// module.exports = {
//   returnSalesError,
//   returnProductError,
//   returnUpdateError,
// };
