# require-extensions ![Travis](https://img.shields.io/travis/AndreasPizsa/require-extensions.svg?style=flat-square) ![Downloads](https://img.shields.io/npm/dm/require-extensions.svg?style=flat-square) %}

> Get the extensions of executable file names as glob pattern or regular expression

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i require-extensions --save
```

## Usage

```javascript
require.extensions.glob             // -> {.js,.coffee}
require.extensions.regexp           // -> /(?:\.js|\.coffee)/
require.extensions.regexp.string    // -> '(?:\.js|\.coffee)'
```

```javascript
require('require-extensions');

var glob = require('glob');
var files = glob.sync("plugins/*." + require.extensions.glob);
// -> ['plugins/thisfile.js', 'plugins/thatfile.coffee', 'plugins/thisfile.litcoffee']

files[0].match(require.extensions.regexp);
// -> != null
```

### Functions

### [glob](index.js#L19)

return a glob pattern for `require.extensions`

### [regexp](index.js#L30)

return a new `RegExp` object that matches `require.extensions`

### [regexp_string](index.js#L43)

return a new `String` regular expression that matches `require.extensions`

## Motivation

Many libraries use a hardcoded `.js` string to discover executable file names, unfortunately leaving out other extensions that contain executable code such as `.coffee`, `.litcoffee`, and potentially others that are accessible through Node’s `require.extensions` property. By making this property accessible as a glob pattern and regular expression, it will become easier to use it as a search pattern and load code that was written in other languages or dialects.

## Author

**Andreas Pizsa**

+ [github/AndreasPizsa](https://github.com/AndreasPizsa)
+ [twitter/AndreasPizsa](http://twitter.com/AndreasPizsa)

## License

Copyright © 2016 Andreas Pizsa
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on January 21, 2016._