import { CryptoAnalyticsUIPage } from './app.po';

describe('crypto-analytics-ui App', function() {
  let page: CryptoAnalyticsUIPage;

  beforeEach(() => {
    page = new CryptoAnalyticsUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
