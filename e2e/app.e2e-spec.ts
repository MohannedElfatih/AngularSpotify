import { AngularspotifyPage } from './app.po';

describe('angularspotify App', () => {
  let page: AngularspotifyPage;

  beforeEach(() => {
    page = new AngularspotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
