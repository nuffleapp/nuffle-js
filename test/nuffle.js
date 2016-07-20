var test = require('tape');
var sinon = require('sinon');
var nuffle = require('../lib/nuffle');

sinon.stub(Math, 'random').returns(0.5);

test('valid rolls', function (t) {
  var equations = {
    0 : 0,
    20 : 20,
    '20' : 20,
    '20 + 10' : 30,
    '20 / 10' : 2,
    '20 - 10' : 10,
    '20 * 10' : 200,
    '1d20' : 11,
    '1d20 + 20' : 31,
    '1d20 + 2d6' : 19,
    '2d6' : 8,
    '(1d20 - 20) / 3d10' : -0.5,
    '((1d20 - 20) / 3d10) - 3d10' : -18.5,
    '((1d20 - 20) / 3d10) - 3d10 * 15' : -270.5,
    '1d20 * 1d6' : 44,
    '1d20 / 1d6' : 2.75,
    '1d20 - 1d6' : 7
  };

  t.plan(Object.keys(equations).length);

  for ( key in equations ) {
    roll = nuffle.roll(key);

    t.equal(roll['result'], equations[key]);
  }
});

test('missing input', function (t) {
  t.plan(1);
  t.throws(function(){nuffle.roll()}, /Input must be an equation or a number/);
});

test('invalid equations', function (t) {
  var equations = [")", "(", "0d0", "0d1", "1d0", "d1", "1d", "1d20 +", "+ 1d20", "1d20 -", "- 1d20", "1d20 /", "/ 1d20", "1d20 *", "* 1d20", "nuffle"];

  t.plan(equations.length);

  for ( var i = 0; i < equations.length; i++ ) {
    t.throws(function(){nuffle.roll(equations[i])}, /Invalid equation/);
  }
});

test('unbalanced equations', function (t) {
  var equations = ["((1d20)", "(1d20))"];

  t.plan(equations.length);

  for ( var i = 0; i < equations.length; i++ ) {
    t.throws(function(){nuffle.roll(equations[i])}, /Unbalanced parens/);
  }
});

test('test invalid object types', function (t) {
  var equations = [true, [], {}, null]

  t.plan(equations.length);

  for ( var i = 0; i < equations.length; i++ ) {
    t.throws(function(){nuffle.roll(equations[i])}, /Input must be an equation or a number/);
  }
});
