# cli-react-redux

## Table of contents
  
* [Quick Overview](#quick-overview)
* [Install](#install)
* [Licence](#licence)

## Quick Overview

CLI React Redux generates a project structure to make you able to save time and effort when starting a new React project. Not only does it create the strucure but also you get the initial functionality and tests that help you get started quickly even if you don't have much React experience yet.

After you have created a new react app by using the amazing tool [create-react-app](https://github.com/facebook/create-react-app), the initial project structure will be generated as following:

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

By installing this package, your project structure will be updated as following:

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

## Install

Create a React project by using [react-create-app](https://github.com/facebook/create-react-app)
```sh
$ npx create-react-app MyApp
```

Create the main container

```sh
$ npx cli-react-redux create firstcontainer MyApp
```

Create secondary container(s) <br>
_For now reducer and saga have to be added manually to `rootReducer.js` and `rootSaga.js`._

```sh
$ npx cli-react-redux create container Second
```

You may want to remove App.js and App.test.js

```sh
$ rm App.js
$ rm App.test.js
```

Add required dependencies

```sh
$ yarn add redux redux-saga react-redux reselect history react-router-dom react-router-redux@next
```

Add required dependencies for UNIT testing
```sh
$ yarn add enzyme enzyme-adapter-react-16
```

Set up enzyme adapter for React 16 <br>
Create file `[project root]/config/jest.setup.js` with the following content

```sh
/* [project root]/config/jest.setup.js */

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
```

and add follwoing linest to `package.json`
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
## Licence

Licensed under the MIT license.