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

It is recommended to install yarn
```sh
$ npm i -g yarn
```

Create the main container

```sh
$ npx cli-react-redux create firstcontainer Home
```

Create secondary container(s) <br>
_For now reducer and saga have to be added manually to `rootReducer.js` and `rootSaga.js`._

```sh
$ npx cli-react-redux create container Second
```

Add required dependencies

```sh
$ yarn add redux redux-saga react-redux reselect history react-router-dom react-router-redux@next enzyme enzyme-adapter-react-16
```

Add the following lines to `package.json` for code coverage
```js
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
  }
}
```
## Licence

Licensed under the MIT license.
