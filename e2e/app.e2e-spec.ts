import { CheckersPage } from './app.po';

describe('checkers App', function() {
  let page: CheckersPage;

  beforeEach(() => {
    page = new CheckersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
