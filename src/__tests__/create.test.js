jest.mock('fs');
jest.mock('path');

const fs = require('fs-extra');
const path = require('path');
const create = require('../create');

describe('create.js', () => {
  describe('async function indexJs', () => {
    it('ends with writing content to file', async () => {
      path.join = jest.fn().mockReturnValue('/foo');
      fs.copy = jest.fn();
      fs.readFile = jest.fn().mockReturnValue('');
      fs.writeFile = jest.fn();
      const nameArg = 'Name';
      await create.indexJs(nameArg);
      expect(path.join).toHaveBeenCalled();
      expect(fs.copy).toHaveBeenCalled();
      expect(fs.readFile).toHaveBeenCalled();
      expect(fs.writeFile).toHaveBeenCalled();
    });
  });
});
