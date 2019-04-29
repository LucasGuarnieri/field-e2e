import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  refresh() {
    return browser.refresh();
  }

  getTitleText() {
    return element(by.deepCss('app-login ion-header ion-title')).getText();
  }

  getIonInputByName(inputName: string) {
    const response = {
      component: element(by.css(`app-login ion-input[name="${inputName}"]`)),
      input: element(by.css(`app-login ion-input[name="${inputName}"] > input`)) 
    }
    return response;
  }

  getContainerErrors () {
    return element(by.css('app-login .item-error'));
  }
  
  getSubmitButton() {
    return element(by.css('app-login ion-footer .submit-form')); 
  }
}
