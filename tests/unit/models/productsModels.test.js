const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const {
  mockProducts,
  mockOneProduct,
  mockAllProducts,
  mockInsertDb,
  updateMockDb } = require('../../mocks/productMock');

describe('Teste para a camada de Model', function () {
  // describe('Testa o funcionamento da função getAllProducts', function () {
  //   it('Testa funcionalidades da getAllProducts', async function () {
  //     sinon.stub(connection, 'execute').resolves(mockAllProducts);

  //     const result = await productModel.getAllProducts();

  //     expect(mockProducts).to.be.an('array');
  //     expect(mockProducts).to.be.deep.equal(result);
  //   });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromId', function () {
  //   it('Testa se retorna o produto com o id passado como parâmetro', async function () {
  //     sinon.stub(connection, 'execute').resolves(mockAllProducts);

  //     const product = await productModel.getProductFromId(1);

  //     expect(product).to.be.an('object');
  //     expect(product).to.be.deep.equal(mockOneProduct);
  //   });
  //   afterEach(sinon.restore);
  // });

  describe('Testa o funcionamento da função insertProduct', function () {
    it('Testa se o produto é inserido corretamente', async function () {
      sinon.stub(connection, 'execute').resolves(mockInsertDb);

      const product = await productModel.insertProduct({ name: 'Gungnir' });

      expect(product).to.be.deep.equal(4);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função updateProduct', () => {
    it('Testa se o produto é modificado corretamente', async () => {
      sinon.stub(connection, 'execute').resolves(updateMockDb);

      const updateProduct = await productModel.updateProduct('Capa da Invisibilidade', 1);

      expect(updateProduct).to.be.equal(0);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da funçao deleteProduct', () => {
    it('Testa se o produto é deletado com sucesso', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const deletedProduct = await productModel.deleteProduct(1);

      expect(deletedProduct).to.be.equal(undefined);
    });
    afterEach(sinon.restore);
  });
});
