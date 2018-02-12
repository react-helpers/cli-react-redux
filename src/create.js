const fs = require('fs-extra');
const path = require('path');

const cliDir = __dirname;
const pwd = process.env.PWD;

async function replacePlaceHolders(filePath, name) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const NameFirstUpper = name[0].toUpperCase() + name.slice(1);
  const NameFirstLower = name[0].toLowerCase() + name.slice(1);
  const NameAllLower = name.toLowerCase();

  const result = fileContent
    .replace(/'<nameOf>'/g, NameFirstLower)
    .replace(/'<NameOf>'/g, NameFirstUpper)
    .replace(/'<nameof>'/g, NameAllLower);

  await fs.writeFile(filePath, result, 'utf8');
}

function dirName(name) {
  return name.toLowerCase();
  // const nameArg = name.replace(/[^0-9a-z]/gi, '');
  // const firstLetter = nameArg[0];
  // const partName = nameArg.slice(1).replace(/([A-Z])/g, '-$1').trim().toLowerCase();
  // const dirName = (`${firstLetter}${partName}`.toLowerCase());
  // return dirName;
}

module.exports = {
  indexJs: async (name) => {
    const filePath = path.join('', 'src', 'containers', dirName(name), 'index.js');
    await fs.copy(path.join(cliDir, 'templates', 'index'), filePath);
    await replacePlaceHolders(filePath, name);
  },

  indexTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', 'index.test.js');
    await fs.copy(path.join(cliDir, 'templates', 'index.test'), filePath);
    await replacePlaceHolders(filePath, name);
  },

  indexComponentJs: async (name) => {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), `${Name}.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'IndexComponent'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  indexComponentTestJs: async (name) => {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', `${Name}.test.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'IndexComponent.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  reducerJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), 'reducer.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'reducer'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  reducerTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', 'reducer.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'reducer.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  sagaJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), 'sagas.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'sagas'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  sagaTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', 'sagas.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'sagas.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  actionTypesJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), 'actionTypes.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actionTypes'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  actionTypesTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', 'actionTypes.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actionTypes.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  selectorsJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), 'selectors.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'selectors'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  selectorsTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'containers', dirName(name), '__tests__', 'selectors.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'selectors.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  rootReducerJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'rootReducer.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootReducer'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  rootReducerTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', '__tests__', 'rootReducer.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootReducer.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  rootSagaJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'rootSaga.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootSaga'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  rootSagaTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', '__tests__', 'rootSaga.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootSaga.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  storeJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'store.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'store'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  storeTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', '__tests__', 'store.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'store.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  navigatorJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'Navigator.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'Navigator'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  navigatorTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', '__tests__', 'Navigator.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'Navigator.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  appJs: async (name) => {
    const filePath = path.join(pwd, 'src', 'App.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'App'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  appTestJs: async (name) => {
    const filePath = path.join(pwd, 'src', '__tests__', 'App.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'App.test'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  e2eTestJs: async (name) => {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'e2e', 'local', `${Name}.spec.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'e2e.spec'),
      filePath
    );
    await replacePlaceHolders(filePath, name);
  },

  WebdriverIOLocalConf: async () => {
    const filePath = path.join(pwd, 'e2e', 'local', 'wdio.local.conf.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'wdio.local.conf.js'),
      filePath
    );
  },

  setupTestsJs: async () => {
    const filePath = path.join(pwd, 'src', 'setupTests.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'setupTests.js'),
      filePath
    );
  },
};
