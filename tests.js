var rules = require('./index').rules;
RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

ruleTester.run('no-skip-tests', rules['no-skip-tests'], {
  valid: [
    {
      code: 'describe("Some describe block", function() {});'
    }, {
      code: 'it("Some assertion", function() {});'
    }, {
      code: 'xit.skip("Some assertion", function() {});'
    }, {
      code: 'xdescribe.skip("Some describe block", function() {});'
    }
  ],

  invalid: [
    {
      code: 'describe.skip("Some describe block", function() {});',
      errors: [{
        message: 'describe.skip not permitted'
      }]
    }, {
      code: 'it.skip("Some assertion", function() {});',
      errors: [{
        message: 'it.skip not permitted'
      }]
    }
  ]
});

console.log('Tests completed successfully');
