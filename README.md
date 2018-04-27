# pouchdb-fixture-loader

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/pouchdb-fixture-loader
[travis-image]: https://img.shields.io/travis/tlvince/pouchdb-fixture-loader.svg
[npm-url]: https://www.npmjs.com/package/pouchdb-fixture-loader
[npm-image]: https://img.shields.io/npm/v/pouchdb-fixture-loader.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/pouchdb-fixture-loader.svg

> Deploy CouchDB/PouchDB fixtures from directories

## Installation

```shell
npm install --save pouchdb-fixture-loader
```

## Usage

```js
const loadFixtures = require('pouchdb-fixture-loader')
const paths = [
  'fixtures/db'
]
loadFixtures(PouchDB, paths)
//=> Promise
```

## Author

© 2018 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
