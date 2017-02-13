import { TheDonaldPage } from './app.po';

describe('the-donald App', function() {
  let page: TheDonaldPage;

  beforeEach(() => {
    page = new TheDonaldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jsr works!');
  });
});
