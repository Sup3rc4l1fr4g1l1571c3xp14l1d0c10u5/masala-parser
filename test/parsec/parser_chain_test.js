'use strict';

var ParSec = require('../parsec_helper.js'),
    parser = ParSec.parsec.parser,
    stream = ParSec.stream;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['parser_chain'] = {
  setUp: function(done) {
    done();
  },
        
  'expect (chain) to be accepted': function(test) {
    test.expect(1);
    // tests here  
    var p1  = parser.numberLiteral.thenLeft(parser.char(' ').opt()),
        p2  = parser.any.then(parser.any).thenLeft(parser.eos).map(function (r) {
            return r[0] + r[1];
        });

      test.equal(p1.chain(p2).parse(stream.ofString("12 34"),0).isAccepted(),
               true,
               'should be accepted.');
    test.done();
  },

  'expect (chain) to return 46': function(test) {
    test.expect(1);
    // tests here  
    var p1  = parser.numberLiteral.thenLeft(parser.char(' ').opt()),
        p2  = parser.any.then(parser.any).thenLeft(parser.eos).map(function (r) {
            return r[0] + r[1];
        });
      
    test.equal(p1.chain(p2).parse(stream.ofString("12 34"),0).value,
               46,
               'should be 46.');
    test.done();
  },
};