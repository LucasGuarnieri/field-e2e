import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('The world is your oyster.');
  });
});
