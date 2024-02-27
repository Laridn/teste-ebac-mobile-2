class HomeScreen {
  get #enterStoreAdress() {
    return $('id:button_login_store');
  }

  async goToLogin() {
    await this.#enterStoreAdress.click();
  }
}

module.exports = new HomeScreen();
