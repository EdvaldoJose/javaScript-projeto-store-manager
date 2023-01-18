const allSalesArrayMock = [
  [
    {
      saleId: 1,
      date: "2022-11-17T21:43:26.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: "2022-11-17T21:43:26.000Z",
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: "2022-11-17T21:43:26.000Z",
      productId: 3,
      quantity: 15,
    },
  ],
  null,
];

const allSalesMock = [
  {
    saleId: 1,
    date: "2022-11-17T21:43:26.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-11-17T21:43:26.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-11-17T21:43:26.000Z",
    productId: 3,
    quantity: 15,
  },
];

const insertMockData = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 1,
    info: "",
    serverStatus: 2,
    warningStatus: 0,
  },
  null,
];

const registeredProducts = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const returnModelMock = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const registeredWrongProducts = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const wrongSales = { type: "NOT_FOUND", message: "Product not found" };

module.exports = {
  allSalesArrayMock,
  allSalesMock,
  insertMockData,
  registeredProducts,
  registeredWrongProducts,
  returnModelMock,
  wrongSales,
};
