const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productModel');
const productService = require('../../../src/services/productService');
const {
  mockAllProducts,
  mockProducts,
  mockOneProduct,
  newObject,
  updateMockIdDb,
  deletedProductMockModel } = require('../../mocks/productMock');
const { returnProductError, returnUpdateError } = require('../../mocks/returnErrors');

describe('Teste para a camada de Service ', function () {
  describe('Testa o funcionamento da função getAllProducts', function () {
    it('Testa funcionalidades da getAllProducts', async function () {
      sinon.stub(productModel, 'getAllProducts').resolves(mockAllProducts);

      const result = await productService.getAllProducts();

      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockAllProducts);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromId', function () {
    it('Testa se retorna o produto com o id passado como parâmetro', async function () {
      sinon.stub(productModel, 'getProductFromId').resolves(mockOneProduct);

      const product = await productService.getProductFromId(1);

      expect(product).to.be.an('object');
      expect(product).to.be.deep.equal(mockOneProduct);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função insertProduct', function () {
    it('Testa se o produto é inserido corretamente', async function () {
      sinon.stub(productModel, 'getProductFromId').resolves(newObject);
      sinon.stub(productModel, 'insertProduct').resolves(4);

      const product = await productService.insertProduct({ name: 'Gungnir' });

      expect(product).to.be.deep.equal(newObject);
    });

    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função updateProduct', () => {
    it('Testa se o produto é alterado com sucesso', async () => {
      sinon.stub(productModel, 'getProductFromId').resolves(mockOneProduct);
      sinon.stub(productModel, 'updateProduct').resolves(updateMockIdDb);

      const productId = await productService.getProductFromId(1);

      const updatedProduct = await productService.updateProduct('Capa da Invisibilidade de Harry Potter', 1);

      expect(updatedProduct).to.be.an('object');
      expect(updatedProduct).to.be.equal(productId);
    });

    it('Testa se não é possível alterar por não existir Id do produto', async () => {
      sinon.stub(productModel, 'getProductFromId').resolves(undefined);
      sinon.stub(productModel, 'updateProduct').resolves(updateMockIdDb);

      const updatedProduct = await productService.updateProduct('Capa da Invisibilidade de Harry Potter', 1);

      expect(updatedProduct).to.be.deep.equal(returnProductError)
    });

    it('Testa se não é possivel alterar por não haver affectedRows', async () => {
      sinon.stub(productModel, 'getProductFromId').resolves(mockOneProduct);
      sinon.stub(productModel, 'updateProduct').resolves(undefined);

      const notUpdatedMessage = await productService.updateProduct('Capa da Invisibilidade de Harry Potter', 1);

      expect(notUpdatedMessage).to.be.deep.equal(returnUpdateError)
    });
      afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função deleteProduct', () => {
    it('Testa se o produto é deletado com sucesso', async () => {
      sinon.stub(productModel, 'getProductFromId').resolves(mockOneProduct);
      sinon.stub(productModel, 'deleteProduct').resolves(deletedProductMockModel);

      const deletedProduct = await productService.deleteProduct(1);

      expect(deletedProduct).to.deep.equal(deletedProductMockModel);
    });

    it('Testa se o produto não será encontrado', async () => {
      sinon.stub(productModel, 'getProductFromId').resolves(undefined);

      const notFoundProduct = await productService.deleteProduct(99);

      expect(notFoundProduct).to.be.deep.equal(returnProductError);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função searchProduct', () => {
    it('Testa se o produto será encontrado com a query selecionada', async () => {
      sinon.stub(productModel, 'getAllProducts').resolves(mockProducts);

      const searchedProduct = await productService.searchProduct('telo');

      expect(searchedProduct).to.be.an('array');
      expect(searchedProduct[0]).to.be.deep.equal(mockOneProduct);
    });

    afterEach(sinon.restore);
  });
});

