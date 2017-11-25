# weedout [![Build Status](https://travis-ci.org/Zertz/weedout.png)](https://travis-ci.org/Zertz/weedout) [![NPM version](https://badge.fury.io/js/weedout.png)](http://badge.fury.io/js/weedout) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Removes the value at the specified path, also traversing object arrays.

```js
npm i weedout --save
```

## Usage

```js
const weedout = require('weedout')

const foo = weedout({
  foo: {
    bar: 42
  }
}, 'foo.bar')

// foo = {}
```

```js
const weedout = require('weedout')

const foo = weedout({
  foo: [{
    bar: 42
  }]
}, 'foo.bar')

// bar = {
//   foo: [{}]
// }
```

## Contributing

I'd love for you to contribute and make weedout even better than it is today!

```
git clone https://github.com/Zertz/weedout.git
npm install
npm test
```
