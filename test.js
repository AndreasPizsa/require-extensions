'use strict';

require('mocha');
var requireExtensions = require('./');
var assert = require('assert');
var isGlob = require('is-valid-glob');

describe('require-extension', function(){

    describe('requireExtensions()', function() {
        it('is a function', function(){
            assert.equal('function',typeof requireExtensions);
        });
        it('returns an Array', function(){
            assert.equal(true,Array.isArray(requireExtensions()));
        });
        it('contains all keys of `require.extensions`', function(){
            assert.deepEqual(Object.keys(require.extensions),requireExtensions());
        })
    });

    describe('.glob()', function(){
        it('creates a valid glob pattern', function(){
            assert.equal(true,isGlob(requireExtensions.glob()));
        });
    });

    describe('.regexp()', function(){
        it('generates valid RegExp\'s',function(){
            requireExtensions().forEach(function(extension){
                var testName = 'index'+extension;
                assert.equal(true,requireExtensions.regexp().test(testName));

                testName += 'whatever';
                assert.equal(false,requireExtensions.regexp().test(testName));
            })
        });

        describe('with match groups', function() {
            // with Regexp group
            it('returns the matched extension as matches[1]', function(){
                assert.equal('.js','index.js'.match(requireExtensions.regexp(true))[1]);
            });

            it('returns null on no match', function() {
                assert.equal(null,'index.c'.match(requireExtensions.regexp(true)));
            });
        });
    });

    describe('require.extensions Properties', function(){
        // Properties
        it('require.extensions.regexp is a RegExp', function(){
            assert.equal(true,require.extensions.regexp.test('index.js'));
        });
        it('require.extensions.glob is a Glob pattern', function() {
            assert.equal(true, isGlob(require.extensions.glob));
        });
    })
});
