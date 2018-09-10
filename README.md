# eslint-plugin-no-skip-tests

[![Version](https://img.shields.io/npm/v/eslint-plugin-no-only-tests.svg)](https://www.npmjs.com/package/eslint-plugin-no-only-tests)

ESLint rule for `describe.skip` and `it.skip` in [mocha](https://mochajs.org/) tests.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-skip-tests`:

```
$ npm install eslint-plugin-no-skip-tests --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-skip-tests` globally.

## Usage

Add `no-skip-tests` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "no-skip-tests"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-skip-tests/no-skip-tests": 2
  }
}
```

