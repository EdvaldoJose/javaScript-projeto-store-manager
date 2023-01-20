const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {
  mockProducts,
  mockOneProduct,
  newObject } = require('../../mocks/productMock');
const productController = require('../../../src/controllers/productController');
const productService = require('../../../src/services/productService');
const errorMessage = require('../../mocks/errorMessage');

chai.use(sinonChai);

describe('Teste para a camada de Controller', function () {
  describe('Testa o funcionamento da função getAllProducts', function () {
    it('Testa funcionalidades da getAllProducts', async function () {
      const req = {};
      const res = {};

      sinon.stub(productService, 'getAllProducts').resolves(mockProducts);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromId', function () {
    it('Testa se retorna o produto com o id passado como parâmetro', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      sinon.stub(productService, 'getProductFromId').resolves(mockOneProduct);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.getProductFromId(req, res);

      expect(res.status).to.be.have.been.calledWith(200);
      expect(res.json).to.be.have.been.calledWith(mockOneProduct);
    });

    it('Testa se há o retorno do erro ao passar um id inexistente', async function () {
      const req = { params: { id: 86 } };
      const res = {};

      sinon.stub(productService, 'getProductFromId').resolves(undefined);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(errorMessage);

      await productController.getProductFromId(req, res);

      expect(res.status).to.be.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(errorMessage);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função insertProduct', function () {
    it('Testa se o produto é inserido corretamente', async function () {
      sinon.stub(productService, 'insertProduct').resolves(newObject);

      const req = { body: { name: 'Gungnir' } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.insertProduct(req, res);

      expect(res.status).to.be.have.calledWith(201);
      expect(res.json).to.have.been.calledWith(newObject);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função updateProduct', () => {
    it('Testa se o produto é atualizado com sucesso', async () => {
      sinon.stub(productService, 'updateProduct').resolves();
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função deleteProduct', () => {
    it('Testa se o produto é deletado com sucesso', async () => {
      sinon.stub(productService, 'deleteProduct').resolves(undefined);

      const req = { params: { id: 2 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith({
        message: 'Product deleted successfully',
      });
    });
  });
});
