const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(`
    SELECT sale_id as saleId,
    product_id as productId,
    quantity,
    date
    FROM sales_products as SP
    INNER JOIN sales as S
    ON SP.sale_id = S.id
    ORDER BY SP.sale_id`);
  return result;
};

const getSalesFromId = async (id) => {
  const [result] = await connection.execute(`SELECT product_id as productId,
  quantity FROM sales_products WHERE sale_id = ?`, [id]);
  return result;
};

const getSalesIdWithDate = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT product_id as productId, quantity, date
    FROM sales_products
    INNER JOIN sales as S
    ON S.id = sale_id
    WHERE id = ?;
  `,
    [id],
  );
  return result;
};

const insertSales = async () => {
  const [result] = await connection.execute(
    'INSERT INTO sales (date) VALUES (default)',
  );
  const { insertId } = result;
  return insertId;
};

const registerSales = async (sales) => {
  const saleId = await insertSales();
  const salesRegistered = sales.map(async ({ productId, quantity }) => {
    const [result] = await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
    );
    return result;
  });

  await Promise.all(salesRegistered);
  return {
    id: saleId,
    itemsSold: sales,
  };
};

const deleteSale = async (id) => {
  await connection.execute(
    `
    DELETE FROM sales WHERE id = ?
  `,
    [id],
  );
};

const updateSales = async ({ quantity, productId }, salesId) => {
  await connection.execute(
    `
    UPDATE sales_products SET quantity = ? WHERE product_id = ? AND sale_id = ?
    `,
    [quantity, productId, salesId],
  );
};

module.exports = {
  getAllSales,
  getSalesFromId,
  registerSales,
  getSalesIdWithDate,
  deleteSale,
  updateSales,
};