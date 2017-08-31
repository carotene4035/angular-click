import { ClickablePage } from './app.po';

describe('clickable App', () => {
  let page: ClickablePage;

  beforeEach(() => {
    page = new ClickablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
