import { ShopPage } from './app.po';

describe('temp App', () => {
  let page: ShopPage;

  beforeEach(() => {
    page = new ShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Products');
  });
});
