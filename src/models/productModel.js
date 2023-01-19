const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductFromId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
};

const insertProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [product],
  );
  return insertId;
};

const updateProduct = async (name, id) => {
  const [{ affectedRows }] = await connection.execute(
    `
    UPDATE products SET name = ? WHERE id = ?
  `,
    [name, id],
  );
  return affectedRows;
};

const deleteProduct = async (id) => {
  await connection.execute(
    `
    DELETE FROM products WHERE id = ?;
  `,
    [id],
  );
};

module.exports = {
  getAllProducts,
  getProductFromId,
  insertProduct,
  updateProduct,
  deleteProduct,
};
