import { AngularPlayGroundPage } from './app.po';

describe('angular-play-ground App', () => {
  let page: AngularPlayGroundPage;

  beforeEach(() => {
    page = new AngularPlayGroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
