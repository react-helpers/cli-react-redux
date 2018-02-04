const assert = require('assert');

const TIMEOUT = 5000;

describe(''<NameOf>'', () => {
  it('has data-test-id '<nameof>'-container', () => {
    browser.waitUntil(() => browser.url('http://localhost:3000/'), TIMEOUT);
    assert.equal(browser.element('[data-test-id="'<nameof>'-container"]').state, 'success');
  });
});
