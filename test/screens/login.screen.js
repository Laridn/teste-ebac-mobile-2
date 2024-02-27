class LoginScreen {
  get #storeAddress() {
    return $('android.widget.EditText');
  }

  get #btnContinue() {
    return $('id:bottom_button');
  }

  get #continueWithStoreCredentials() {
    return $('id:login_site_creds');
  }

  get #username() {
    return $('android=new UiSelector().text("Username")');
  }

  get #password() {
    return $('android=new UiSelector().text("Password")');
  }

  get #btnTypeYourPassword() {
    return $('id:login_enter_password');
  }

  async setStoreAdress(url) {
    await this.#storeAddress.setValue(url);
  }

  async btnContinue() {
    await this.#btnContinue.click();
  }

  async continueWithCredentials() {
    await this.#continueWithStoreCredentials.click();
  }

  async login(username, password) {
    await this.#username.setValue(username);
    await this.#password.setValue(password);
    await this.#btnContinue.click();
  }

  async BtnTypePassword() {
    await this.#btnTypeYourPassword.click();
  }

  async passwordTwoFactorLogin(password) {
    await this.#password.setValue(password);
    await this.#btnContinue.click();
  }
}

module.exports = new LoginScreen();
