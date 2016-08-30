[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Build Status](https://travis-ci.org/nuffleapp/nuffle-js.svg?branch=master)](https://travis-ci.org/nuffleapp/nuffle-js) [![codecov](https://codecov.io/gh/nuffleapp/nuffle-js/branch/master/graph/badge.svg)](https://codecov.io/gh/nuffleapp/nuffle-js) [![Gitter](https://badges.gitter.im/nuffleapp/nuffle-js.svg)](https://gitter.im/nuffleapp/nuffle-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)


# Nuffle, The JavaScript Library

Nuffle, The JavaScript Library, is a dice calculator library that provides the functionality to perform complex dice rolls and calculate their result (ex: `5d6 + 1d20 / (1d6 - 2)`).


## Installation

### Via npm

Create a package.json file (if necessary):

```
npm init
```

Install the library via [npm](https://www.npmjs.com/):

```
npm install nuffle --save
```

Require the library from within your script:

```
var nuffle = require('nuffle');
```

### Manually

Download the [latest release](https://github.com/nuffleapp/nuffle-js/archive/master.zip), extract into a directory called `nuffle`, and include the library at the beginning of your script:

```
var nuffle = require('./nuffle/lib/nuffle');
```

## Usage

Nuffle is a dice calculator, allowing you to perform complex dice rolls and calculate their result. To do so, simply call the `roll()` method with your equation:

```
nuffle.roll('5d6 + 1d20 / (1d6 - 2)')
```

That method will return an object that looks like the following:

```
{
  "input" : "5d6 + 1d20 / (1d6 - 2)",
  "equation" : "(2 + 1 + 2 + 4 + 5) + (11) / ((4) - 2)",
  "rolls" : [
      {
         "notation" : "5d6",
         "rolls" : [
            2,
            1,
            2,
            4,
            5
         ]
      },
      {
         "notation" : "1d20",
         "rolls" : [
            11
         ]
      },
      {
         "rolls" : [
            4
         ],
         "notation" : "1d6"
      }
   ],
   "result" : 19.5
}
```

The object includes the value of each individual dice roll notation, the expanded equation, the equation result, and the original input.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Nuffle is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/nuffleapp/nuffle-js/releases) for changelogs for each release version of Nuffle.


## Support

The [issue tracker](https://github.com/nuffleapp/nuffle-js/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests).

For personal support requests, please use [Gitter](https://gitter.im/nuffleapp/nuffle-js) to get help.


## Copyright and License

Code and documentation copyright 2016 nuffleapp. Code released under [the MIT license](LICENSE).
