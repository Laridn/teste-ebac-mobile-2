const homeScreen = require('../screens/home.screen');
const loginScreen = require('../screens/login.screen');
const myStoreScreen = require('../screens/myStore.screen');

let usuario = 'gerente';
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ';
let urlLoja = 'http://lojaebac.ebaconline.art.br/';

describe('Acess Admin Panel', () => {
  it('should login with valid credentials', async () => {
    await homeScreen.goToLogin();
    await loginScreen.setStoreAdress(urlLoja);
    await loginScreen.btnContinue();
    await loginScreen.continueWithCredentials();
    await loginScreen.login(usuario, senha);
    await loginScreen.BtnTypePassword();
    await loginScreen.passwordTwoFactorLogin(senha);

    expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy();
    expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop');
  });
});
