import { BlankNG4Page } from './app.po';

describe('blank-ng4 App', () => {
  let page: BlankNG4Page;

  beforeEach(() => {
    page = new BlankNG4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
