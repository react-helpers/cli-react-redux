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

async function indexJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'index.js');
    await fs.copy(path.join(cliDir, 'templates', 'index'), filePath);
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.indexJs = indexJs;

async function indexTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'index.test.js');
    await fs.copy(path.join(cliDir, 'templates', 'index.test'), filePath);
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.indexTestJs = indexTestJs;

async function indexComponentJs(name) {
  try {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), `${Name}.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'IndexComponent'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.indexComponentJs = indexComponentJs;

async function indexComponentTestJs(name) {
  try {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', `${Name}.test.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'IndexComponent.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.indexComponentTestJs = indexComponentTestJs;

async function reducerJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'reducer.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'reducer'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.reducerJs = reducerJs;

async function reducerTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'reducer.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'reducer.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.reducerTestJs = reducerTestJs;

async function sagaJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'sagas.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'sagas'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.sagaJs = sagaJs;

async function sagaTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'sagas.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'sagas.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.sagaTestJs = sagaTestJs;

async function actionTypesJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'actionTypes.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actionTypes'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.actionTypesJs = actionTypesJs;

async function actionTypesTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'actionTypes.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actionTypes.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.actionTypesTestJs = actionTypesTestJs;

async function actionsJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'actions.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actions'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.actionsJs = actionsJs;

async function actionsTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'actions.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'actions.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.actionsTestJs = actionsTestJs;

async function selectorsJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), 'selectors.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'selectors'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.selectorsJs = selectorsJs;

async function selectorsTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'containers', name.toLowerCase(), '__tests__', 'selectors.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'selectors.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.selectorsTestJs = selectorsTestJs;

async function rootReducerJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'rootReducer.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootReducer'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.rootReducerJs = rootReducerJs;

async function rootReducerTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', '__tests__', 'rootReducer.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootReducer.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.rootReducerTestJs = rootReducerTestJs;

async function rootSagaJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'rootSaga.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootSaga'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.rootSagaJs = rootSagaJs;

async function rootSagaTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', '__tests__', 'rootSaga.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'rootSaga.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.rootSagaTestJs = rootSagaTestJs;

async function storeJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'store.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'store'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.storeJs = storeJs;

async function navigatorJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'Navigator.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'Navigator'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.navigatorJs = navigatorJs;

async function navigatorTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', '__tests__', 'Navigator.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'Navigator.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.navigatorTestJs = navigatorTestJs;

async function appJs(name) {
  try {
    const filePath = path.join(pwd, 'src', 'App.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'App'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.appJs = appJs;

async function appTestJs(name) {
  try {
    const filePath = path.join(pwd, 'src', '__tests__', 'App.test.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'App.test'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.appTestJs = appTestJs;

async function e2eTestJs(name) {
  try {
    const Name = name[0].toUpperCase() + name.slice(1);
    const filePath = path.join(pwd, 'features', 'e2e', 'local', `${Name}.spec.js`);
    await fs.copy(
      path.join(cliDir, 'templates', 'e2e.spec'),
      filePath,
    );
    await replacePlaceHolders(filePath, name);
  } catch (error) {
    console.error(error);
  }
}
module.exports.e2eTestJs = e2eTestJs;

async function WebdriverIOLocalConf() {
  try {
    const filePath = path.join(pwd, 'features', 'e2e', 'local', 'wdio.local.conf.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'wdio.local.conf.js'),
      filePath,
    );
  } catch (error) {
    console.error(error);
  }
}
module.exports.WebdriverIOLocalConf = WebdriverIOLocalConf;

async function setupTestsJs() {
  try {
    const filePath = path.join(pwd, 'src', 'setupTests.js');
    await fs.copy(
      path.join(cliDir, 'templates', 'setupTests.js'),
      filePath,
    );
  } catch (error) {
    console.error(error);
  }
}
module.exports.setupTestsJs = setupTestsJs;
