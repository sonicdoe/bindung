# bindung

[![Node.js package](https://img.shields.io/npm/v/bindung.svg)](https://www.npmjs.com/package/bindung)
[![Build status](https://img.shields.io/travis/sonicdoe/bindung.svg)](https://travis-ci.org/sonicdoe/bindung)

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

## Differences to bindings

- Only tries `Release` and `Debug` build paths
  ([as opposed to `bindings`](https://github.com/TooTallNate/node-bindings/blob/v1.2.1/bindings.js#L18-L34))
- Looks for `binding.gyp` instead of `package.json`
  (therefore it works without `package.json` being present)
- Always appends `.node`
  ([as opposed to `bindings`](https://github.com/TooTallNate/node-bindings/blob/v1.2.1/bindings.js#L58-L61)),
  which means that you should not append `.node` yourself
- Requires Node.js v4 or later

## Changelog

This project follows [Semantic Versioning 2](http://semver.org/).

- v1.0.0 (2017-01-01): Initial release

## License

`bindung` is licensed under the ISC license.
See [`LICENSE`](./LICENSE) for the full license.
