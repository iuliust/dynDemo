import { browser, element, by } from 'protractor';

export class TheDonaldPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jsr-root h1')).getText();
  }
}
