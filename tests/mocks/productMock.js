const mockProductList = [
  [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    {
      id: 2,
      name: "Traje de encolhimento",
    },
    {
      id: 3,
      name: "Escudo do Capitão América",
    },
  ],
  null,
];

const mockProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
];

const mockOneProduct = {
  id: 1,
  name: "Martelo de Thor",
};
//req-5
const mockInsertDb = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: "",
    serverStatus: 2,
    warningStatus: 0,
  },
  null,
];

const newObject = {
  id: 4,
  name: "Gungnir",
};

const updateMockDb = [
  {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: "Rows matched: 0 Changed: 0 Warnings: 0",
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
];

const updateMockIdDb = [
  {
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: "Rows matched: 0 Changed: 0 Warnings: 0",
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
];

const deletedProductMockModel = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: "",
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
];

const mockWrongProduct = {
  id: 99,
  name: "Assassin Dagger",
};
//req-2
module.exports = {
  mockProductList,
  mockProducts,
  mockOneProduct,
  mockInsertDb,
  newObject,
  updateMockDb,
  updateMockIdDb,
  deletedProductMockModel,
  mockWrongProduct,
};

// const mockAllProducts = [
//   [
//     {
//       id: 1,
//       name: "Martelo de Thor",
//     },
//     {
//       id: 2,
//       name: "Traje de encolhimento",
//     },
//     {
//       id: 3,
//       name: "Escudo do Capitão América",
//     },
//   ],
//   null,
// ];
// const mockProducts = [
//   {
//     id: 1,
//     name: "Martelo de Thor",
//   },
//   {
//     id: 2,
//     name: "Traje de encolhimento",
//   },
//   {
//     id: 3,
//     name: "Escudo do Capitão América",
//   },
// ];
// const mockOneProduct = {
//   id: 1,
//   name: "Martelo de Thor",
// };
// const mockInsertDb = [
//   {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 4,
//     info: "",
//     serverStatus: 2,
//     warningStatus: 0,
//   },
//   null,
// ];
// const newObject = {
//   id: 4,
//   name: "Gungnir",
// };

// const updateMockDb = [
//   {
//     fieldCount: 0,
//     affectedRows: 0,
//     insertId: 0,
//     info: "Rows matched: 0  Changed: 0  Warnings: 0",
//     serverStatus: 2,
//     warningStatus: 0,
//     changedRows: 0,
//   },
// ];

// const updateMockIdDb = [
//   {
//     fieldCount: 0,
//     affectedRows: 0,
//     insertId: 0,
//     info: "Rows matched: 0  Changed: 0  Warnings: 0",
//     serverStatus: 2,
//     warningStatus: 0,
//     changedRows: 0,
//   },
// ];

// const deletedProductMockModel = [
//   {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     info: "",
//     serverStatus: 2,
//     warningStatus: 0,
//   },
// ];

// const mockWrongProduct = {
//   id: 99,
//   name: "Assassin Dagger",
// };

// module.exports = {
//   mockAllProducts,
//   mockProducts,
//   mockOneProduct,
//   mockInsertDb,
//   newObject,
//   updateMockDb,
//   updateMockIdDb,
//   deletedProductMockModel,
//   mockWrongProduct,
// };
