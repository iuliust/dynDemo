import { DynDemoPage } from './app.po';

describe('dyn-demo App', function() {
  let page: DynDemoPage;

  beforeEach(() => {
    page = new DynDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jsr works!');
  });
});
