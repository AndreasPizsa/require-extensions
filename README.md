require-extensions
==================

> Get `require.extensions` as glob pattern or regular expression, eg. `{.js,.coffee}` or `/(?:\.js|\.coffee)/` to find all executable file types (such as coffeescript), not just .js

![Travis](https://img.shields.io/travis/AndreasPizsa/require-extensions.svg?style=flat-square)
![Downloads](https://img.shields.io/npm/dm/require-extensions.svg?style=flat-square)

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
// -> true
```

# license
[MIT](LICENSE)