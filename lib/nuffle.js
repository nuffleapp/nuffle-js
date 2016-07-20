var nuffle = exports;

// export components
nuffle.calculator = require('./nuffle/calculator');

// expose version through `pkginfo`
exports.version = require('../package').version;

/**
 * Parse and calculate user submitted dice-roll equations
 *
 * @param  {String} equation User input
 * @return {Object}          Response object
 */
nuffle.roll = function(equation) {
  return this.calculator.calculate(equation);
};
