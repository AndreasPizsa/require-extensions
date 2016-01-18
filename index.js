/**
  Function wrapper for `require.extensions`
*/
module.exports = function require_extensions()
{
  return require.extensions;
};

/**
  return a glob pattern for `require.extensions`
*/
module.exports.glob = function require_extensions_glob()
{
  return '{'+require_extensions().join(',')+'}';
};

/**
  return a `RegExp` for `require.extensions`
*/
module.exports.regexp = function require_extensions_regexp(group)
{
  return new RegExp(
    '(' + (group ? '' : '?:') + require_extensions()
    .map(function(ext){ return '\\'+ext; })
    .join('|') +
    ')' );
};

Object.defineProperty(require.extensions,'glob',{
  enumerable: false,
  get: module.exports.glob
});

Object.defineProperty(require.extensions,'regexp',{
  enumerable: false,
  get: module.exports.regexp
});

if(process.mainModule === module) {
  var assert = require('assert');
  require_extensions = function() { return ['.js','.coffee']; };

  assert.equal('{.js,.coffee}',module.exports.glob());

  assert.equal(true,module.exports.regexp().test('index.js'));
  assert.equal(true,module.exports.regexp().test('index.coffee'));
  assert.equal(false,module.exports.regexp().test('index.c'));
  // with Regexp group
  assert.equal('.js','index.js'.match(module.exports.regexp(true))[1]);
  assert.equal('.coffee','index.coffee'.match(module.exports.regexp(true))[1]);
  assert.equal(null,'index.c'.match(module.exports.regexp(true)));

  // Properties
  assert.equal(true,require.extensions.regexp.test('index.js'));
}