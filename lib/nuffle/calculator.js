var calculator = exports;

/**
 * Validate user input
 *
 * @param  {String} input User input
 * @return {Void}
 */
function validate(input) {
  // has to be something we can calculate
  if ( !!!input || (!input.substring && !input.toFixed) ) {
    throw "Input must be an equation or a number.";
  }

  // no empty inputs
  if ( input.trim() === '' ) {
    throw "Input can't be blank.";
  }

  // validate the input format
  if ( !input.match(/^[\(\s]*(([1-9][0-9]*d[1-9][0-9]*)|\d+)[\s\)]*(\s*([\-\+\*\/])[\s\(]*(([1-9][0-9]*d[1-9][0-9]*)|\d+)\)*)*$/i) ) {
    throw "Invalid equation.";
  }

  // make sure the parens are balanced
  if ( !isBalanced(input) ) {
    throw "Unbalanced parens.";
  }

  return;
};

/**
 * Check if equation has balanced parens
 *
 * @param  {String}  input User input
 * @return {Boolean}       Whether or not the parens are balanced
 */
function isBalanced(input) {
  balance = 0;
  chars = input.split('');

  for ( var i = 0; i < chars.length ; i++ ) {
    if ( chars[i] == '(' ) {
      balance++;
    } else if ( chars[i] == ')' ) {
      balance--;
    }

    // found a close paren without a matching open paren,
    // no need to continue further
    if ( balance < 0 ) {
      break;
    }
  }

  return balance === 0;
};

calculator.calculate = function(input) {
  // set response object
  var response = {
    'input' : input,
    'equation' : '',
    'rolls' : [],
    'result' : 0
  };

  // validate
  validate(input);

  // throw rolls and replace 'xdy' notation with results
  response['equation'] = input.replace(/(\d+d\d+)/g, function(match) {
    var notation = match.split('d');
    var rolls = [];

    for ( i = 0; i < notation[0]; i++ ) {
      rolls.push(Math.floor((Math.random() * notation[1]) + 1));
    }

    // save individual roll results
    response['rolls'].push({
        'notation' : match,
        'rolls' : rolls
      });

    return "(" + rolls.join(' + ')  + ")";
  });

  // calculate result
  response['result'] = eval(response['equation']);

  return response;
};
