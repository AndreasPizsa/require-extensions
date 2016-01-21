/**
 * Return an array of valid extensions, eg. ['.js','.json','.node']
 *
 * @api public
 */
function require_extensions()
{
  return Object.keys(require.extensions);
}

module.exports = require_extensions;

/**
 * return a glob pattern for `require.extensions`
 *
 * @api public
 */
function glob()
{
  return '{'+require_extensions().join(',')+'}';
}
module.exports.glob = glob;

/**
 * return a new `RegExp` object that matches `require.extensions`
 *
 * @api public
 */
function regexp(group)
{
  return new RegExp(regexp_string(group)+'$');
}

module.exports.regexp = regexp;


/**
 * return a new `String` regular expression that matches `require.extensions`
 *
 * @api public
 */
function regexp_string(group)
{
  return '(' + (group ? '' : '?:') + (require_extensions()
            .map(function(ext){ return '\\'+ext; })
            .join('|')) +
        ')'
}

module.exports.regexp.string = regexp_string;

Object.defineProperty(require.extensions,'glob',{
  enumerable: false,
  get: module.exports.glob
});

Object.defineProperty(require.extensions,'regexp',{
  enumerable: false,
  get: module.exports.regexp
});
