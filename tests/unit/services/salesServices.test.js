const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');
const productsModel = require('../../../src/models/productModel');
const salesService = require('../../../src/services/salesService');
const {
  allSalesArrayMock,
  allSalesMock,
  registeredProducts,
  returnModelMock,
  nome,
  registeredWrongProducts } = require('../../mocks/salesMock');

describe('Testa a camada Services', () => {
  describe('Testa o funcionamento da função getAllSales', () => {
    it('Testa se todos as vendas são retornadas com sucesso', async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSalesArrayMock);

      const [result] = await salesService.getAllSales();

      expect(allSalesMock).to.be.an('array');
      expect(allSalesMock).to.be.deep.equal(result);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromId', () => {
    // it('Testa se retorna o produto com o id passado como parâmetro', async () => {
    //   sinon.stub(salesModel, 'getSalesFromId').resolves(allSalesArrayMock);

    //   const [sales] = await salesService.getSalesFromId(1);

    //   expect(allSalesMock).to.be.an('array');
    //   expect(allSalesMock).to.be.deep.equal(sales);
    // });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função registerSales', () => {
    // it('Testa se a função cadastra corretamente a venda feita', async () => {
    //   sinon
    //     .stub(productsModel, 'getProductFromId')
    //     .resolves({ id: 2, name: 'Traje de encolhimento' });
    //   sinon.stub(salesModel, "registerSales").resolves(returnModelMock);

    //   const sales = await salesService.registerSales(registeredProducts);

    //   expect(sales).to.be.an('object');
    //   expect(returnModelMock).to.be.deep.equal(sales);
    // });

    it('Testa se a função falha ao tentar cadastrar uma venda não registrada', async () => {
      sinon
        .stub(productsModel, 'getProductFromId')
        .onFirstCall()
        .resolves(undefined)
        .onSecondCall()
        .resolves({ id: 2, name: 'Traje de encolhimento' });

      const sales = await salesService.registerSales(registeredWrongProducts);

      expect(sales).to.be.an('object');
      expect(sales).to.be.deep.equal({
        type: 'NOT_FOUND',
        message: 'Product not found',
      });
    });

    afterEach(sinon.restore);
  });
});

