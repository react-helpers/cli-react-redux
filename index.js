const create = require('./src/create');

const args = process.argv.slice(2);

if (args.length < 3) {
  console.log('Too few arguments :(');
  process.exit(1);
}

const taskArg = args[0];
const typeArg = args[1];
const nameArg = args[2];

function createContainer() {
  create.indexJs(nameArg);
  create.indexTestJs(nameArg);
  create.indexComponentJs(nameArg);
  create.indexComponentTestJs(nameArg);
  create.actionTypesJs(nameArg);
  create.actionTypesTestJs(nameArg);
  create.reducerJs(nameArg);
  create.reducerTestJs(nameArg);
  create.sagaJs(nameArg);
  create.sagaTestJs(nameArg);
  create.selectorsJs(nameArg);
  create.selectorsTestJs(nameArg);
  create.e2eTestJs(nameArg);
}

if (taskArg === 'create' && typeArg === 'firstcontainer') {
  createContainer();
  create.rootReducerJs(nameArg);
  create.rootReducerTestJs(nameArg);
  create.rootSagaJs(nameArg);
  create.rootSagaTestJs(nameArg);
  create.storeJs(nameArg);
  create.navigatorJs(nameArg);
  create.navigatorTestJs(nameArg);
  create.appJs(nameArg);
  create.appTestJs(nameArg);
  create.WebdriverIOLocalConf();
  create.setupTestsJs();
} else if (taskArg === 'create' && typeArg === 'container') {
  createContainer();
}

return 0;
