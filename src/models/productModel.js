const connection = require('./connection');
// alteração do nome_do_banco.tabela (StoreManager.tabela);
const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
    return result;
};

const getProductFromId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
    return result;
};

const insertProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );
  return insertId;
};
// UPDATE products
const updateProduct = async (name, id) => {
  const [{ affectedRows }] = await connection.execute(
    `
    UPDATE StoreManager.products SET name = ? WHERE id = ?
  `,
    [name, id],
  );
  return affectedRows;
};

const deleteProduct = async (id) => {
  await connection.execute(
    `
    DELETE FROM StoreManager.products WHERE id = ?;
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
