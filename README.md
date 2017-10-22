<h1 align="center">
  <!-- Logo -->
  <br/>
  Get-Win
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/get-win">
  <img src="https://img.shields.io/travis/DylanPiercey/get-win.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/get-win">
    <img src="https://img.shields.io/coveralls/DylanPiercey/get-win.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/get-win">
    <img src="https://img.shields.io/npm/v/get-win.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/get-win">
    <img src="https://img.shields.io/npm/dm/get-win.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/get-win">
    <img src="https://img.shields.io/badge/gzipped-441b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Simple utility to get the current `global` context anywhere. There are many of these however they either don't account for all environments and all settings (IE no eval) or do not support older browsers.

Also this module exposes the proper typescript `any` type for the global.

# Installation

```console
npm install get-win
```

# Example

```javascript
import { get } from 'get-win'

const window = get()

window.addEventListener(...)
```

### Contributions

* Use `npm test` to build and run tests.

Please feel free to create a PR!
