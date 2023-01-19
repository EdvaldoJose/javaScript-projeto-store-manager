const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');
const {
  allSalesArrayMock,
  allSalesMock,
  insertMockData,
  registeredProducts,
  returnModelMock,
} = require('../../mocks/salesMock');

describe('Testa a camada Models', () => {
  describe('Testa o funcionamento da função getAllSales', () => {
    it('Testa se todos as vendas são retornadas com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves(allSalesArrayMock);

      const result = await salesModel.getAllSales();

      expect(allSalesMock).to.be.an('array');
      expect(allSalesMock).to.be.deep.equal(result);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromId', () => {
    it('Testa se retorna o produto com o id passado como parâmetro', async () => {
      sinon.stub(connection, 'execute').resolves(allSalesArrayMock);

      const sales = await salesModel.getSalesFromId(1);

      expect(allSalesMock).to.be.an('array');
      expect(allSalesMock).to.be.deep.equal(sales);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função registerSales', () => {
    it("Testa se a função cadastra corretamente a venda feita", async () => {
      sinon.stub(connection, "execute").resolves(insertMockData);

      const sales = await salesModel.registerSales(registeredProducts);
      // const salesNotFound = await salesModel.registerSales(registeredWrongProducts);

      // expect(!sales).to.be.equal({ message: 'Deu treta, bicho' });
      // expect(allSalesMock).to.be.an('object');
      expect(returnModelMock).to.be.deep.equal(sales);
    });
  });
});
