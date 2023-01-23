const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');
const {
  allSalesArrayMock,
  registeredProducts,
  allSalesMock } = require('../../mocks/salesMock');
const errorMessage = require('../../mocks/errorMessage');

chai.use(sinonChai);

const HTTP_OK = 200;
const HTTP_INSERT_OK = 201;
const HTTP_NOT_FOUND = 404;

describe('Teste para a camada de Controller', () => {
  describe('Testa o funcionamento da função getAllSales', () => {
    it('Testa se retornam todas as sales', async () => {
      const req = {};
      const res = {};

      sinon.stub(salesService, 'getAllSales').resolves(allSalesArrayMock);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(HTTP_OK);
      expect(res.json).to.have.been.calledWith(allSalesArrayMock);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getSalesFromId', () => {
    it('testa se retorna a venda com o id informado como parâmetro', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      sinon.stub(salesService, 'getSalesFromId').resolves(registeredProducts);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(); // res.json (res.status)

      await salesController.getSalesFromId(req, res);

      expect(res.status).to.have.been.calledWith(HTTP_OK);
      expect(res.json).to.have.been.calledWith(registeredProducts); // res.json
    });

    it('Testa se retorna mensagem de erro ao passar id errado', async () => {
      const req = { params: { id: 99 } };
      const res = {};

      sinon.stub(salesService, 'getSalesFromId').resolves(undefined);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(errorMessage);

      await salesController.getSalesFromId(req, res);

      expect(res.status).to.have.been.calledWith(HTTP_NOT_FOUND);
      expect(res.json).to.have.been.calledWith(errorMessage);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função registerSales', () => {
    it('testa se a sale é registrada com sucesso', async () => {
      const req = { body: registeredProducts };
      const res = {};

      sinon.stub(salesService, 'registerSales').resolves(allSalesMock);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.registerSales(req, res);

      expect(res.status).to.have.been.calledWith(HTTP_INSERT_OK);
      expect(res.json).to.have.been.calledWith(allSalesMock);
    });

    it('Testa se retorna um erro ao tentar cadastra o produto', async () => {
      const req = {};
      const res = {};

      sinon
        .stub(salesService, 'registerSales')
        .resolves({ type: 'NOT_FOUND', message: 'Product not found' });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.registerSales(req, res);

      expect(res.status).to.have.been.calledWith(HTTP_NOT_FOUND);
      expect(res.json).to.have.been.calledWith(errorMessage);
    });
  });
  afterEach(sinon.restore);
});
