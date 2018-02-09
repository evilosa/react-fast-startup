import { Chrome } from 'navalia';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('Visual Regressions', () => {
  let chrome = null;
  let server = null;

  beforeEach(() => {
    server = require('../../scripts/server');
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
    server.close();
  });

  it('should NEVER happen', () => {
    return chrome.goto('http://localhost:3000/')
      .then(() => chrome.screenshot())
      .then((image) => expect(image).toMatchImageSnapshot());
  });
});