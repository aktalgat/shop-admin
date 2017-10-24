import { browser, by, element } from 'protractor';

export class ShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root a')).getText();
  }
}
