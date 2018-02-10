const fs = require('fs-extra');
// const path = require('path');
const create = require('../create');

describe('create.js', () => {

  describe('async function indexJs', async () => {
    // path.join = jest.fn();
    fs.copy = jest.fn();
    create.replacePlaceHolders = jest.fn();
    const nameArg = 'Name';
    await create.indexJs(nameArg);
    // expect(path.join).toHaveBeenCalled();
    // expect(fs.copy).toHaveBeenCalled();
    // expect(fs.replacePlaceHolders).toHaveBeenCalled();
  });
});
