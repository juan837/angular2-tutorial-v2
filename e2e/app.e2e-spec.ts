import { MiWebV2Page } from './app.po';

describe('mi-web-v2 App', function() {
  let page: MiWebV2Page;

  beforeEach(() => {
    page = new MiWebV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
