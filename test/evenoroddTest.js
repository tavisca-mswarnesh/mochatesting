const assert =require('chai').assert;
const evenorodd=require('../src/evenorodd');
describe('evenorodd()', function() {
    var tests = [
       {args: [2], expected: "even"},
       {args: [1], expected: "odd"}
      
    ];
  
    tests.forEach(function(test) {
      it('even or odd test', function() {
        var res = evenorodd.detect(test.args[0]);
        assert.equal(res, test.expected);
      });
    });
});