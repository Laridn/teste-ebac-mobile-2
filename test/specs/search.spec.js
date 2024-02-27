const productViewScreen = require('../screens/productView.screen');

describe('Search products', () => {
  it('shoud search by Ingrid', async () => {
    let name = 'Ingrid Running Jacket';
    await productViewScreen.waitProduct(name);
    await productViewScreen.search();
    await productViewScreen.searchBy(name);
    await productViewScreen.selectClothes();
    await productViewScreen.addToCart();
    await productViewScreen.selectSize();
    await productViewScreen.selectColor();
    await productViewScreen.chooseOptions();
    await productViewScreen.addToCart();
    await productViewScreen.viewCart();

    expect(await productViewScreen.productAddCart(name)).toExist();
  });
});
