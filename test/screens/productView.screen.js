class ProductViewScreen {
  get #products() {
    return $$(`-ios predicate string: name CONTAINS 'R$'`);
  }

  get #searchIcon() {
    return $(`-ios class chain:**/XCUIElementTypeButton[2]`);
  }

  get #searchText() {
    return $(`-ios predicate string:type == "XCUIElementTypeTextField"`);
  }

  get #searchBtn() {
    return $(`~Procurar`);
  }

  get #clickClothes() {
    return $(`XCUIElementTypeImage`);
  }

  get #addCart() {
    return $(`//XCUIElementTypeButton[@name="Adicionar ao carrinho"]`);
  }

  get #chooseSize() {
    return $('~Size Selecione uma Size');
  }

  get #chooseColor() {
    return $(`-ios predicate string:name == "Color Selecione uma Color"`);
  }

  get #options() {
    return $(`~Escolha suas opções`);
  }

  get #cart() {
    return $(`//XCUIElementTypeButton[@name="1"]`);
  }

  get #productCart() {
    return $('.XCUIElementTypeImage');
  }

  async product(name) {
    await this.waitProduct(name);
    return await $(`-ios predicate string:name CONTAINS '${name}'`);
  }

  async productList() {
    return await this.#products;
  }

  async waitProduct(name) {
    await $(`-ios predicate string:name CONTAINS '${name}'`).waitForDisplayed({
      timeout: 10000,
    });
  }

  async search() {
    await this.#searchIcon.waitForEnabled({ timeout: 10000 });
    await this.#searchIcon.click();
  }

  async searchBy(name) {
    await this.#searchText.waitForEnabled({ timeout: 10000 });
    await this.#searchText.setValue(name);
    await this.#searchBtn.click();
  }

  async selectClothes() {
    await this.#clickClothes.click();
  }

  async addToCart() {
    await this.#addCart.click();
  }

  async selectSize() {
    await this.#chooseSize.click();
  }

  async selectColor() {
    await this.#chooseColor.click();
  }

  async chooseOptions() {
    await this.#options.click();
  }

  async viewCart() {
    await this.#cart.click();
  }

  async productAddCart() {
    return await $('.XCUIElementTypeImage');
  }
}

module.exports = new ProductViewScreen();
