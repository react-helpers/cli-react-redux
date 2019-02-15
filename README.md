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
│   └── home
│       ├── Home.js
│       ├── __tests__
│       │   ├── Home.test.js
│       │   ├── actionTypes.test.js
│       │   ├── index.test.js
│       │   ├── reducer.test.js
│       │   ├── sagas.test.js
│       │   └── selectors.test.js
│       ├── actionTypes.js
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
$ npx create-react-app my-app
```

You may want to remove `App.js` and `App.test.js` from the `src` folder:

```sh
$ rm App.js
$ rm App.test.js
```

Create the main container

```sh
$ npx cli-react-redux create firstcontainer Home
```

Create secondary container(s) <br>
```sh
$ npx cli-react-redux create container Second
```
_For now reducer and saga have to be added manually to `rootReducer.js` and `rootSaga.js`._

Add required dependencies

```sh
$ npm i axios redux redux-saga react-redux reselect history react-router-dom connected-react-router enzyme enzyme-adapter-react-16
```

Add the following lines to `package.json` for code coverage
```js
"jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,mjs}"
    ],
    "coveragePathIgnorePatterns": [
      "<rootDir>/src/index.js",
      "<rootDir>/src/setupTests.js",
      "<rootDir>/src/registerServiceWorker.js"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
    "setupFiles": [
      "<rootDir>/src/setupTests.js",
      "<rootDir>/config/polyfills.js"
    ],
```

Run unit tests
```sh
npm test --coverage
```

Run
```sh
npm start
```

### e2e aka UI tests

There's UI test generated when creating container. Test resides in e2e folder along with wdio conf file. We're using mocha as a testrunner, hence there's mocha timeout option set. See [webdriver.io](http://webdriver.io/guide.html) for more information hot to run and set up UI tests.

## Licence

Licensed under the MIT license.
