const assert =require('chai').assert;
const add=require('../src/add');
describe('add()', function() {
    var tests = [
      {args: [1, 2], expected: 3},
      {args: [1,  3], expected: 4},
      {args: [1, 4], expected: 5}
    ];
  
    tests.forEach(function(test) {
      it('correctly adds ' + test.args.length + ' args', function() {
        var res = add.add(test.args[0], test.args[1]);
        assert.equal(res, test.expected);
      });
    });
});