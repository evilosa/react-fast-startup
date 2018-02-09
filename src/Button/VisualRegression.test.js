import { Chrome } from 'navalia';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('Visual Regressions', () => {
  let chrome = null;

  beforeEach(() => {
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  it('should NEVER happen', () => {
    return chrome.goto('http://localhost:3000/buttons')
      .then(() => chrome.screenshot())
      .then((image) => expect(image).toMatchImageSnapshot());
  });
});