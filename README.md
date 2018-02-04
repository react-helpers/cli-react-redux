# cli-react-redux

## Story

- Using amazing ... react-create-app you'll get src folder containing following:

```sh
.
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
└── registerServiceWorker.js
```
- After installing this package, one command produces following:
```sh
.
├── App.css
├── App.js
├── Navigator.js
├── __tests__
│   ├── App.test.js
│   ├── Navigator.test.js
│   ├── rootReducer.test.js
│   └── rootSaga.test.js
├── containers
│   └── myapp
│       ├── MyApp.js
│       ├── __tests__
│       │   ├── MyApp.test.js
│       │   ├── actionTypes.test.js
│       │   ├── actions.test.js
│       │   ├── index.test.js
│       │   ├── reducer.test.js
│       │   ├── sagas.test.js
│       │   └── selectors.test.js
│       ├── actionTypes.js
│       ├── actions.js
│       ├── index.js
│       ├── reducer.js
│       ├── sagas.js
│       └── selectors.js
├── index.css
├── index.js
├── logo.svg
├── registerServiceWorker.js
├── rootReducer.js
├── rootSaga.js
└── store.js
```
## Usage

- Set up project using create-react-app.

```sh
yarn add cli-react-redux
```
- OR
```sh
npm i -S cli-react-redux
```

- You may want to remove App.js and App.test.js
```sh
rm App.js
rm App.test.js
```

- Add dependencies required
```sh
yarn add redux redux-saga react-redux reselect history react-router-dom react-router-redux@next
```

- Add dependencies required for tests
```sh
yarn add enzyme enzyme-adapter-react-16
```
- Set up enzyme adapter for React 16
- Create file [project root]/config/jest.setup.js to project root,

```sh
/* [project root]/config/jest.setup.js */

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

```

and add follwoing linest to package.json 
```sh
"jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,mjs}",
      "!src/index.js",
      "!src/store.js",
      "!src/registerServiceWorker.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": -10
      }
    },
    "setupFiles": [
      ...
      "<rootDir>/config/jest.setup.js"
    ],
```

Inside a project run
```sh
./node_modules/cli-react-redux create firstcontainer MyApp
```

Add another container
```sh
./node_modules/cli-react-redux create firstcontainer Second
```

For now reducer and saga have to be added manually to rootReducer and root Saga.
