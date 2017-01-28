import { AngularGBooksPage } from './app.po';

describe('angular-gbooks App', function() {
  let page: AngularGBooksPage;

  beforeEach(() => {
    page = new AngularGBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
