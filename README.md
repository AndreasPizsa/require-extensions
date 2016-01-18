require-extensions
==================

> Get executable file extensions as glob pattern or regular expression

![Travis](https://img.shields.io/travis/AndreasPizsa/require-extensions.svg?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/require-extensions.svg?style=flat-square)

# Motivation
Many libraries use a hardcoded `.js` pattern to load executable code such as plugins. This can be easily improved to incude other file types such as `.coffee`, `.litcoffee` and others by using the standard `require.extensions` property, which returns an array of file extensions.

This module introduces
+ `require.extensions.glob`, eg. `{.js,.coffee}`
+ `require.extensions.regexp`, eg. `/(?:\.js|\.coffee)/` 

# Install
```bash
npm i -S require-extensions
```

# Use
```javascript
require('require-extensions');

var glob = require('glob');
var files = glob.sync("plugins/*." + require.extensions.glob);
// -> ['plugins/thisfile.js', 'plugins/thatfile.coffee', 'plugins/thisfile.litcoffee']

files[0].match(require.extensions.regexp);
// -> != null
```

# license
[MIT](LICENSE)
