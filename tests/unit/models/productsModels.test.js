const { expect } = require('chai');
const sinon = require('sinon');
const connections = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const {
  mockProducts,
  mockOneProduct,
  mockAllProducts,
  mockInsertDb,
  updateMockDb } = require('../../mocks/productMock');

describe('Teste para a camada deModel', function () {
  describe('Teste o funcionamento da função getAllProducts', function () {
    it('Testar funcionalidade da getAlProducts', async function () {
      sinon.stub(connection, 'execute').resolves(mockAllProducts);
      const result = await productModel.getAllProducts();
      expect(mockProducts).to.be.an('array');
      expect(mockProducts).to.be.deep.equal(result);
    });
    afterEach(sinon.restore);
  });

  describe('Teste o funcionamento da função getProductFromId', function () {
    it('Teste se retorna o produto com id passado como parâmentro ', async function () {
      sinon.stub(connection, 'execute').resolves(mockAllProducts);
      const product = await productModel.getProductFromId(1);
      expect(product).to.be.an('object');
      expect(product).to.be.deep.equal(mockOneProduct);
    })
    afterEach(sinon.restore);
  });

  describe('Teste o funcionamento da função insertProduct', function () {
    it('Teste se o produto é inserido corretamente', async function () {
      sinon.stub(connection, 'execute').resolves(mockInsertDb);
      const product = await productModel.insertProduct();
      expect(product).to.be.deep.equal(4);
    });
    afterEach(sinon.restore);
  });

  describe('Teste o funcionamento da função updateProduct', function () {
    it('Teste se o produto é modificado corretamente', async function () {
      sinon.stub(connection, 'execute').resolves(updateMockDb);
      const updateProduct = await productModel.updateProduct('Capa da Invisibilidade', 1);
      expect(updateProduct).to.be.equal(0);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função deleteProduct', function () {
    it('Teste se o produto é deletado com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const deteledProduct = await productModel.deletedProduct(1);

      expect(deteledProduct).to.be.equal(undefined);
    });
    afterEach(sinon.restore);
  });
});
