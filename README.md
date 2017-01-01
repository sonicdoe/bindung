# bindung

[![Node.js package](https://img.shields.io/npm/v/bindung.svg)](https://www.npmjs.com/package/bindung)

> Helps you require your native Node.js addon.

`bindung` is a simpler and more modern alternative to
[`bindings`](https://github.com/TooTallNate/node-bindings).
It removes support for legacy paths, requires Node.js v4 or later, and
basically uses a simple `try…catch` statement [as explained in the Node.js documentation](https://nodejs.org/dist/latest-v6.x/docs/api/addons.html#addons_building).

## Installation

```sh
$ npm install bindung --save
```

## Usage

Pass the `target_name`, as defined in your `binding.gyp`, to `bindung`.

```js
const addon = require('bindung')('addon')
```

## Changelog

This project follows [Semantic Versioning 2](http://semver.org/).

## License

`bindung` is licensed under the ISC license.
See [`LICENSE`](./LICENSE) for the full license.
