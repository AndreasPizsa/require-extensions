require-extensions
==================

> Get the extensions of executable file names as glob pattern or regular expression

![Travis](https://img.shields.io/travis/AndreasPizsa/require-extensions.svg?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/require-extensions.svg?style=flat-square)

# Motivation
Many libraries use a hardcoded `.js` string to discover executable file names, unfortunately leaving out other extensions that contain executable code such as `.coffee`, `.litcoffee`, and potentially others that are accessible through Node’s `require.extensions` property. By making this property accessible as a glob pattern and regular expression, it will become easier to use it as a search pattern and load code that was written in other languages or dialects.

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
