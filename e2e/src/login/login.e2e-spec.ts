import { LoginPage } from './login.po';
import { by, protractor, browser, $ } from 'protractor';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should be login page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Login Page');
  });

  it('should display email ion-input', () => {
    expect(page.getIonInputByName('email').component.getAttribute('class')).toMatch('ion-untouched');
  });

  it('should display password ion-input', () => {
    expect(page.getIonInputByName('password').component.getAttribute('class')).toMatch('ion-untouched');
  });

  it('should be a invalid email', () => {
    page.getIonInputByName('email').input.sendKeys('E');
    expect(page.getIonInputByName('email').component.getAttribute('class')).toMatch('ng-invalid');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should be to show correct email error message -> invalid email', () => {
    expect(page.getContainerErrors().getText()).toContain('email not valid');
    expect(page.getContainerErrors().all(by.tagName('ion-label')).getAttribute('ng-reflect-color')).toMatch('danger');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should be to show correct email error message -> email is required', () => {
    page.getIonInputByName('email').input.sendKeys(protractor.Key.BACK_SPACE);
    expect(page.getContainerErrors().getText()).toContain('email is required');
    expect(page.getContainerErrors().all(by.tagName('ion-label')).getAttribute('ng-reflect-color')).toMatch('danger');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  })

  it('should be a invalid password', () => {
    /**
     * Reload Page
     */
    page.refresh();
    page.getIonInputByName('password').input.sendKeys('E');
    expect(page.getIonInputByName('password').component.getAttribute('class')).toMatch('ng-invalid');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should be to show correct password error message -> the password must be greater than 8 characters', () => {
    expect(page.getContainerErrors().getText()).toContain('the password must be greater than 8 characters');
    expect(page.getContainerErrors().all(by.tagName('ion-label')).getAttribute('ng-reflect-color')).toMatch('danger');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should be to show correct password error message -> password is required', () => {
    page.getIonInputByName('password').input.sendKeys(protractor.Key.BACK_SPACE);
    expect(page.getContainerErrors().getText()).toContain('password is required');
    expect(page.getContainerErrors().all(by.tagName('ion-label')).getAttribute('ng-reflect-color')).toMatch('danger');

    /**
     * SUBMIT BUTTON
     */
    expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
  });

  it('should be a valid email', () => {
    page.getIonInputByName('email').input.sendKeys('guarnieri@fieldcontrol.com.br');
    expect(page.getIonInputByName('email').component.getAttribute('class')).toMatch('ng-valid');
  });

  it('should be a valid password', () => {
    page.getIonInputByName('password').input.sendKeys('agoravaimeusprincesos');
    expect(page.getIonInputByName('password').component.getAttribute('class')).toMatch('ng-valid');
  });

  it('should be a enabled submit form', () => {
    expect(page.getSubmitButton().getAttribute('disabled')).toBeFalsy();
  });

  it('should be redirected to home page', () => {
    page.getSubmitButton().click().then(() => {
      browser.getCurrentUrl().then((actualUrl) => {
        expect(actualUrl).toContain('home');
      });
    })
  });
});
